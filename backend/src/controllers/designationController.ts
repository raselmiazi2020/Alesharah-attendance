import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { Designation } from '../models/Designation';

export const listDesignations = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Designation);
  const designations = await repo.find();
  return res.json(designations);
};

export const createDesignation = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Designation);
  const designation = repo.create(req.body);
  const saved = await repo.save(designation);
  return res.status(201).json(saved);
};

export const updateDesignation = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Designation);
  const designation = await repo.findOneBy({ id: Number(req.params.id) });
  if (!designation) return res.status(404).json({ message: 'Designation not found' });
  repo.merge(designation, req.body);
  const updated = await repo.save(designation);
  return res.json(updated);
};

export const deleteDesignation = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Designation);
  await repo.delete({ id: Number(req.params.id) });
  return res.status(204).send();
};
