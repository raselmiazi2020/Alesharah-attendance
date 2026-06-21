import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AppDataSource } from '../config/database';
import { User } from '../models/User';

dotenv.config();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOne({ where: { email }, relations: ['role'] });
  if (!user) return res.status(401).json({ message: 'Invalid credential' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credential' });

  const token = jwt.sign({ userId: user.id, role: user.role?.name }, process.env.JWT_SECRET || 'secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

  return res.json({ token, user: { id: user.id, email: user.email, role: user.role?.name } });
};

export const register = async (req: Request, res: Response) => {
  const { email, password, roleId } = req.body;
  const userRepo = AppDataSource.getRepository(User);
  const existing = await userRepo.findOne({ where: { email } });
  if (existing) return res.status(409).json({ message: 'Email already taken' });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = userRepo.create({ email, password: hashed, role_id: roleId, isActive: true });
  await userRepo.save(newUser);

  return res.status(201).json({ id: newUser.id, email: newUser.email });
};
