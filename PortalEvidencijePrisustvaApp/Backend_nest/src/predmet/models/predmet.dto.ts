/* eslint-disable prettier/prettier */
import { Cas } from "src/cas/models/cas.entity";
import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";
import { Profesor } from "src/profesor/models/profesor.entity";

export class PredmetDTO {
  naziv: string;
  drzi: Profesor;
  ima: Cas[];
  evidentira: Prisustvo[];
}