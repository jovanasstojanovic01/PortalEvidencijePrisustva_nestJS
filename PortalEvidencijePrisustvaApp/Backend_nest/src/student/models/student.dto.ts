/* eslint-disable prettier/prettier */
import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";

export class StudentDTO {
  email: string;
  password: string;
  ime: string;
  prezime: string;
  indeks: number;
  prisustvovao: Prisustvo[];
}