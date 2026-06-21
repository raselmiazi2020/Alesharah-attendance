import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'departments' })
export class Department {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) name: string;

  @Column({ default: '' }) description: string;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];
}
