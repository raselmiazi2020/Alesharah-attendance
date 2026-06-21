import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { AttendanceLog } from '../models/AttendanceLog';

export const listAttendance = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(AttendanceLog);
  const logs = await repo.find({ relations: ['employee'] });
  return res.json(logs);
};

export const createAttendanceLog = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(AttendanceLog);
  const attendance = repo.create(req.body);
  const saved = await repo.save(attendance);
  return res.status(201).json(saved);
};

export const updateAttendanceLog = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(AttendanceLog);
  const attendance = await repo.findOneBy({ id: Number(req.params.id) });
  if (!attendance) return res.status(404).json({ message: 'Attendance record not found' });
  repo.merge(attendance, req.body);
  const updated = await repo.save(attendance);
  return res.json(updated);
};
