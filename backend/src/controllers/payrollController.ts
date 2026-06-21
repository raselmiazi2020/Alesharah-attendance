import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { Payroll } from '../models/Payroll';

export const listPayrolls = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Payroll);
  const payrolls = await repo.find();
  return res.json(payrolls);
};

export const createPayroll = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Payroll);
  const payroll = repo.create(req.body);
  payroll.netPay = Number(payroll.basicSalary) + Number(payroll.allowances) + Number(payroll.overtimeAmount) + Number(payroll.attendanceBonus) - Number(payroll.leaveDeduction) - Number(payroll.lateDeduction) - Number(payroll.advanceSalary);
  const saved = await repo.save(payroll);
  return res.status(201).json(saved);
};

export const getPayroll = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Payroll);
  const payroll = await repo.findOneBy({ id: Number(req.params.id) });
  if (!payroll) return res.status(404).json({ message: 'Payroll not found' });
  return res.json(payroll);
};
