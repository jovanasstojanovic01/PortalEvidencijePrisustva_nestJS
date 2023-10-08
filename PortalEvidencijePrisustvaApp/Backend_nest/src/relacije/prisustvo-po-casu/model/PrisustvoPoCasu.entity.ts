/* eslint-disable prettier/prettier */
import { Cas } from "src/cas/models/cas.entity";
import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";
import {  Entity, JoinColumn, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PrisustvoPoCasu {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Prisustvo, (prisustvo) => prisustvo.prisustvoPoCasu)
  @JoinColumn({ name: 'prisustvo_id' })
  prisustvo: Prisustvo;

  @ManyToOne(() => Cas, (cas) => cas.prisustvoPoCasu)
  @JoinColumn({ name: 'cas_id' })            
  cas: Cas;
}