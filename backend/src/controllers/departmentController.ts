import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { Department } from '../models/Department';

export const listDepartments = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Department);
  const departments = await repo.find();
  return res.json(departments);
};

export const createDepartment = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Department);
  const department = repo.create(req.body);
  const saved = await repo.save(department);
  return res.status(201).json(saved);
};

export const updateDepartment = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Department);
  const department = await repo.findOneBy({ id: Number(req.params.id) });
  if (!department) return res.status(404).json({ message: 'Department not found' });
  repo.merge(department, req.body);
  const updated = await repo.save(department);
  return res.json(updated);
};

export const deleteDepartment = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Department);
  await repo.delete({ id: Number(req.params.id) });
  return res.status(204).send();
};
