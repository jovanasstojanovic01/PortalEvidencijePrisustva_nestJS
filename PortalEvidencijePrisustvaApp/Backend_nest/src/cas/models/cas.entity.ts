/* eslint-disable prettier/prettier */
import { Predmet } from "src/predmet/models/predmet.entity";
import { PrisustvoPoCasu } from "src/relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sifra: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  prijava_do: Date;

  @ManyToOne(() => Predmet, (predmet) => predmet.ima)
  @JoinColumn({ name: 'predmet_id' }) 
  ima: Predmet;

  @OneToMany(() => PrisustvoPoCasu, (prisustvoPoCasu) => prisustvoPoCasu.prisustvo)
  prisustvoPoCasu: PrisustvoPoCasu[];
}