import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'payrolls' })
export class Payroll {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column() employee_id: number;
  @Column({ type: 'date' }) payrollDate: string;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) basicSalary: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) allowances: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) overtimeAmount: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) attendanceBonus: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) leaveDeduction: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) lateDeduction: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) advanceSalary: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) netPay: number;
  @Column({ default: 'pending' }) status: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
