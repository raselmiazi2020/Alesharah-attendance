import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Department } from './Department';
import { Designation } from './Designation';
import { Role } from './Role';
import { EmployeeFace } from './EmployeeFace';
import { EmployeeFingerprint } from './EmployeeFingerprint';
import { AttendanceLog } from './AttendanceLog';
import { SalaryStructure } from './SalaryStructure';
import { LeaveRequest } from './LeaveRequest';
import { User } from './User';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) employeeId: string;
  @Column({ unique: true }) employeeCode: string;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({ nullable: true }) photo: string;
  @Column({ nullable: true }) faceData: string;
  @Column({ nullable: true }) fingerprintId: string;
  @Column({ nullable: true }) fatherName: string;
  @Column({ nullable: true }) motherName: string;
  @Column({ nullable: true }) nationalId: string;
  @Column({ nullable: true }) gender: string;
  @Column({ nullable: true, type: 'date' }) dateOfBirth: string;
  @Column({ nullable: true, type: 'date' }) joiningDate: string;
  @Column({ nullable: true, type: 'date' }) endDate: string;
  @Column({ nullable: true }) employmentType: string;
  @Column({ nullable: true }) salaryType: string;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) basicSalary: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) houseRent: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) medical: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) transport: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) foodAllowance: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) attendanceBonus: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) overtimeRate: number;
  @Column({ default: true }) status: boolean;
  @Column({ nullable: true }) address: string;
  @Column({ nullable: true }) emergencyContact: string;
  @Column({ nullable: true }) bloodGroup: string;
  @Column({ nullable: true }) profilePhoto: string;
  @Column({ nullable: true }) email: string;
  @Column({ nullable: true }) phone: string;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column({ nullable: true }) department_id: number;

  @ManyToOne(() => Designation, (designation) => designation.employees)
  @JoinColumn({ name: 'designation_id' })
  designation: Designation;

  @Column({ nullable: true }) designation_id: number;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Column({ nullable: true }) role_id: number;

  @ManyToOne(() => User, (user) => user.employees)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ nullable: true }) user_id: number;

  @OneToMany(() => EmployeeFace, (face) => face.employee)
  faces: EmployeeFace[];

  @OneToMany(() => EmployeeFingerprint, (fingerprint) => fingerprint.employee)
  fingerprints: EmployeeFingerprint[];

  @OneToMany(() => AttendanceLog, (attendance) => attendance.employee)
  attendanceLogs: AttendanceLog[];

  @OneToMany(() => SalaryStructure, (salary) => salary.employee)
  salaryStructures: SalaryStructure[];

  @OneToMany(() => LeaveRequest, (leave) => leave.employee)
  leaveRequests: LeaveRequest[];

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
