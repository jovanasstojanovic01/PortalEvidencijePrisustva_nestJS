/* eslint-disable prettier/prettier */
import { Profesor } from 'src/profesor/models/profesor.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Administrator {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profesor)
  @JoinColumn({ name: 'profesor_id' })
  profesor: Profesor;
}
