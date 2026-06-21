import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { AttendanceLog } from './AttendanceLog';

@Entity({ name: 'attendance_images' })
export class AttendanceImage {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => AttendanceLog)
  @JoinColumn({ name: 'attendance_id' })
  attendance: AttendanceLog;

  @Column() attendance_id: number;
  @Column({ nullable: true }) imageUrl: string;
  @CreateDateColumn() createdAt: Date;
}
