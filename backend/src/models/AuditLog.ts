import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'audit_logs' })
export class AuditLog {
  @PrimaryGeneratedColumn() id: number;

  @Column() entity: string;
  @Column() entityId: string;
  @Column() action: string;
  @Column({ type: 'text', nullable: true }) changes: string;
  @Column({ nullable: true }) performedBy: string;
  @Column({ nullable: true, type: 'datetime' }) performedAt: Date;
  @CreateDateColumn() createdAt: Date;
}
