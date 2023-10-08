/* eslint-disable prettier/prettier */
import { Cas } from "src/cas/models/cas.entity";
import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";
import { Profesor } from "src/profesor/models/profesor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Predmet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  naziv: string;

  @ManyToOne(() => Profesor, (profesor) => profesor.drzi)
  @JoinColumn({ name: 'profesor_id' })
  drzi: Profesor;

  @OneToMany(() => Cas, (cas) => cas.ima)
  ima: Cas[];

  @OneToMany(() => Prisustvo, (prisustvo) => prisustvo.evidentira)
  evidentira: Prisustvo[];
}
