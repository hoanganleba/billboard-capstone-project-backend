import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ward {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
