import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LeaveRequest } from './LeaveRequest';

@Entity({ name: 'leave_types' })
export class LeaveType {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) name: string;
  @Column({ default: '' }) description: string;
  @Column({ type: 'int', default: 0 }) totalDays: number;
  @OneToMany(() => LeaveRequest, (leave) => leave.leaveType)
  leaveRequests: LeaveRequest[];
}
