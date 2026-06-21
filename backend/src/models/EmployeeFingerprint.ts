import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'employee_fingerprints' })
export class EmployeeFingerprint {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Employee, (employee) => employee.fingerprints)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column() employee_id: number;
  @Column({ unique: true }) fingerprintId: string;
  @Column({ nullable: true }) deviceType: string;
  @Column({ nullable: true }) source: string;
  @CreateDateColumn() createdAt: Date;
}
