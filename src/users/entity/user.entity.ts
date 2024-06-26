import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column('date')
  createdAt: Date;

  @Column('date')
  updatedAt: Date;
}
