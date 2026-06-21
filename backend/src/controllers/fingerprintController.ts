import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { EmployeeFingerprint } from '../models/EmployeeFingerprint';

export const registerFingerprint = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(EmployeeFingerprint);
  const fingerprint = repo.create(req.body);
  const saved = await repo.save(fingerprint);
  return res.status(201).json(saved);
};

export const listFingerprints = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(EmployeeFingerprint);
  const fingerprints = await repo.find({ relations: ['employee'] });
  return res.json(fingerprints);
};
