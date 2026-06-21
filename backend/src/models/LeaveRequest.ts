import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Employee } from './Employee';
import { LeaveType } from './LeaveType';

@Entity({ name: 'leave_requests' })
export class LeaveRequest {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Employee, (employee) => employee.leaveRequests)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column() employee_id: number;

  @ManyToOne(() => LeaveType, (leaveType) => leaveType.leaveRequests)
  @JoinColumn({ name: 'leave_type_id' })
  leaveType: LeaveType;

  @Column() leave_type_id: number;
  @Column({ type: 'date' }) fromDate: string;
  @Column({ type: 'date' }) toDate: string;
  @Column({ type: 'int', default: 0 }) totalDays: number;
  @Column({ default: 'pending' }) status: string;
  @Column({ nullable: true }) reason: string;
  @Column({ nullable: true }) approverRemarks: string;
  @Column({ nullable: true }) approvedBy: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
