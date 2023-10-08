/* eslint-disable prettier/prettier */
import { Cas } from "src/cas/models/cas.entity";
import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";

export class PrisustvoPoCasuDTO {
  id: number;
  prisustvo: Prisustvo;
  cas: Cas;
}