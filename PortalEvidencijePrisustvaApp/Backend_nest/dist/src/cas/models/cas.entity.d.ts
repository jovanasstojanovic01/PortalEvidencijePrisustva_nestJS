import { Predmet } from "src/predmet/models/predmet.entity";
import { PrisustvoPoCasu } from "src/relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity";
export declare class Cas {
    id: number;
    sifra: string;
    prijava_do: Date;
    ima: Predmet;
    prisustvoPoCasu: PrisustvoPoCasu[];
}
