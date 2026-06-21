import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'attendance_logs' })
export class AttendanceLog {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Employee, (employee) => employee.attendanceLogs)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column() employee_id: number;
  @Column({ type: 'date' }) date: string;
  @Column({ type: 'datetime', nullable: true }) checkIn: Date;
  @Column({ type: 'datetime', nullable: true }) checkOut: Date;
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 }) workHours: number;
  @Column({ type: 'int', default: 0 }) lateMinutes: number;
  @Column({ type: 'int', default: 0 }) earlyLeaveMinutes: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 }) overtimeHours: number;
  @Column({ default: 'present' }) status: string;
  @Column({ nullable: true }) location: string;
  @Column({ nullable: true }) deviceInfo: string;
  @Column({ nullable: true }) verificationScreenshot: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
