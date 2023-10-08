/* eslint-disable prettier/prettier */
import { Predmet } from "src/predmet/models/predmet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  ime: string;

  @Column()
  prezime: string;

  @OneToMany(() => Predmet, (predmet) => predmet.drzi)
  drzi: Predmet[];
}