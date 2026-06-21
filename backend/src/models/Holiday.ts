import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'holidays' })
export class Holiday {
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;
  @Column({ type: 'date' }) date: string;
  @Column({ default: '' }) description: string;
  @Column({ default: true }) isActive: boolean;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
