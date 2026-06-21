import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './Employee';

@Entity({ name: 'designations' })
export class Designation {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) name: string;

  @Column({ default: '' }) description: string;

  @OneToMany(() => Employee, (employee) => employee.designation)
  employees: Employee[];
}
