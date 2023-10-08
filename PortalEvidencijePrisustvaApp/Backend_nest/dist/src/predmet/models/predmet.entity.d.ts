import { Cas } from "src/cas/models/cas.entity";
import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";
import { Profesor } from "src/profesor/models/profesor.entity";
export declare class Predmet {
    id: number;
    naziv: string;
    drzi: Profesor;
    ima: Cas[];
    evidentira: Prisustvo[];
}
