import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from './Role';
import { Employee } from './Employee';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) email: string;

  @Column() password: string;

  @Column({ default: true }) isActive: boolean;

  @Column({ default: false }) isSuperAdmin: boolean;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Column({ nullable: true }) role_id: number;

  @OneToMany(() => Employee, (employee) => employee.user)
  employees: Employee[];
}
