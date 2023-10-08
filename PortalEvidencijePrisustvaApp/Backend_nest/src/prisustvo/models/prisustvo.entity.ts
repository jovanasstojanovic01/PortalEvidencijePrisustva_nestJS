/* eslint-disable prettier/prettier */
import { Predmet } from "src/predmet/models/predmet.entity";
import { PrisustvoPoCasu } from "src/relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity";
import { Student } from "src/student/models/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prisustvo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.prisustvovao)
  @JoinColumn({ name: 'student_id' })
  prisustvovao: Student;

  @Column()
  broj_odslusanih_casova: number;

  @ManyToOne(() => Predmet, (predmet) => predmet.evidentira)
  @JoinColumn({ name: 'predmet_id' }) 
  evidentira: Predmet;

  @OneToMany(() => PrisustvoPoCasu, (prisustvoPoCasu) => prisustvoPoCasu.prisustvo)
  prisustvoPoCasu: PrisustvoPoCasu[];
}