import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'overtime_logs' })
export class OvertimeLog {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column() employee_id: number;
  @Column({ type: 'date' }) date: string;
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 }) hours: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) rate: number;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 }) amount: number;
  @Column({ default: 'approved' }) status: string;
  @CreateDateColumn() createdAt: Date;
}
