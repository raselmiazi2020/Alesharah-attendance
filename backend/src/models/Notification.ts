import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'notifications' })
export class Notification {
  @PrimaryGeneratedColumn() id: number;

  @Column() recipient: string;
  @Column() channel: string;
  @Column() title: string;
  @Column({ type: 'text' }) message: string;
  @Column({ default: 'pending' }) status: string;
  @Column({ nullable: true }) sentAt: Date;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
