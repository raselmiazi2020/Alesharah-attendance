import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'shifts' })
export class Shift {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) name: string;
  @Column({ type: 'time' }) startTime: string;
  @Column({ type: 'time' }) endTime: string;
  @Column({ type: 'int', default: 0 }) graceTimeMinutes: number;
  @Column({ type: 'int', default: 0 }) lateThresholdMinutes: number;
  @Column({ type: 'int', default: 0 }) earlyLeaveThresholdMinutes: number;
  @Column({ default: true }) isActive: boolean;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
