/* eslint-disable prettier/prettier */
import { Predmet } from "src/predmet/models/predmet.entity";
import { PrisustvoPoCasu } from "src/relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity";

export class CasDTO {
  sifra: string;
  prijava_do: Date;
  ima: Predmet;
  prisustvoPoCasu: PrisustvoPoCasu[];
}