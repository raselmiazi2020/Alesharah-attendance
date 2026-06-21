import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { EmployeeFace } from '../models/EmployeeFace';

export const registerFace = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(EmployeeFace);
  const face = repo.create(req.body);
  const saved = await repo.save(face);
  return res.status(201).json(saved);
};

export const listFaces = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(EmployeeFace);
  const faces = await repo.find({ relations: ['employee'] });
  return res.json(faces);
};
