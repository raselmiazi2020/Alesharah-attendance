import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { Role } from '../models/Role';

export const listRoles = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Role);
  const roles = await repo.find();
  return res.json(roles);
};

export const createRole = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Role);
  const role = repo.create(req.body);
  const saved = await repo.save(role);
  return res.status(201).json(saved);
};

export const updateRole = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Role);
  const role = await repo.findOneBy({ id: Number(req.params.id) });
  if (!role) return res.status(404).json({ message: 'Role not found' });
  repo.merge(role, req.body);
  const updated = await repo.save(role);
  return res.json(updated);
};

export const deleteRole = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Role);
  await repo.delete({ id: Number(req.params.id) });
  return res.status(204).send();
};
