import { Cas } from "./cas";
import { Prisustvo } from "./prisustvo";
import { Profesor } from "./profesor";

export interface Predmet{
    id: number;
    naziv: string;
    drzi: Profesor;
    ima: Cas[];
    evidentira: Prisustvo[];
}