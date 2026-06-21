import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'salary_structures' })
export class SalaryStructure {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Employee, (employee) => employee.salaryStructures)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column() employee_id: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) basicSalary: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) houseRent: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) medical: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) transport: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) foodAllowance: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) attendanceBonus: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) overtimeRate: number;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
