import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'employee_faces' })
export class EmployeeFace {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Employee, (employee) => employee.faces)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column() employee_id: number;
  @Column({ type: 'longtext' }) embeddings: string;
  @Column({ nullable: true }) source: string;
  @Column({ default: true }) isActive: boolean;
  @CreateDateColumn() createdAt: Date;
}
