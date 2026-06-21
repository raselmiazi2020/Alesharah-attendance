import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { LeaveType } from '../models/LeaveType';
import { LeaveRequest } from '../models/LeaveRequest';

export const listLeaveTypes = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(LeaveType);
  const types = await repo.find();
  return res.json(types);
};

export const createLeaveType = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(LeaveType);
  const leaveType = repo.create(req.body);
  const saved = await repo.save(leaveType);
  return res.status(201).json(saved);
};

export const submitLeaveRequest = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(LeaveRequest);
  const leaveRequest = repo.create(req.body);
  const saved = await repo.save(leaveRequest);
  return res.status(201).json(saved);
};

export const listLeaveRequests = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(LeaveRequest);
  const requests = await repo.find({ relations: ['employee', 'leaveType'] });
  return res.json(requests);
};

export const updateLeaveRequest = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(LeaveRequest);
  const request = await repo.findOneBy({ id: Number(req.params.id) });
  if (!request) return res.status(404).json({ message: 'Leave request not found' });
  repo.merge(request, req.body);
  const updated = await repo.save(request);
  return res.json(updated);
};
