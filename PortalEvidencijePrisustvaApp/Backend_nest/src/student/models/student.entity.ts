/* eslint-disable prettier/prettier */
import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
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

  @Column()
  indeks: number;

  @OneToMany(() => Prisustvo, (prisustvo) => prisustvo.prisustvovao)
  @JoinColumn({ name: 'prisustvo_id' }) 
  prisustvovao: Prisustvo[];
}
