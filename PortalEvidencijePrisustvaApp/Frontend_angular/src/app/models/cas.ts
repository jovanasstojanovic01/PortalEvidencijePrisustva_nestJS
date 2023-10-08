import { Predmet } from "./predmet";

export interface Cas{
    id: number;
    sifra: string;
    prijava_do: Date;
    ima: Predmet;
}