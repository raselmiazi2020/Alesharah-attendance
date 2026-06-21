import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { Employee } from '../models/Employee';
import { Department } from '../models/Department';
import { Designation } from '../models/Designation';
import { Role } from '../models/Role';

export const createEmployee = async (req: Request, res: Response) => {
  const employeeRepo = AppDataSource.getRepository(Employee);
  const employee = employeeRepo.create(req.body);
  const saved = await employeeRepo.save(employee);
  return res.status(201).json(saved);
};

export const listEmployees = async (req: Request, res: Response) => {
  const employeeRepo = AppDataSource.getRepository(Employee);
  const employees = await employeeRepo.find({ relations: ['department', 'designation', 'role'] });
  return res.json(employees);
};

export const getEmployee = async (req: Request, res: Response) => {
  const employeeRepo = AppDataSource.getRepository(Employee);
  const employee = await employeeRepo.findOne({ where: { id: Number(req.params.id) }, relations: ['department', 'designation', 'role'] });
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  return res.json(employee);
};

export const updateEmployee = async (req: Request, res: Response) => {
  const employeeRepo = AppDataSource.getRepository(Employee);
  const employee = await employeeRepo.findOneBy({ id: Number(req.params.id) });
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  employeeRepo.merge(employee, req.body);
  const updated = await employeeRepo.save(employee);
  return res.json(updated);
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const employeeRepo = AppDataSource.getRepository(Employee);
  await employeeRepo.delete({ id: Number(req.params.id) });
  return res.status(204).send();
};
