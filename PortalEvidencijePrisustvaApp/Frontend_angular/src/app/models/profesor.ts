import { Predmet } from "./predmet";

export interface Profesor{
    id: number;
    email: string;
    password: string;
    ime: string;
    prezime: string;
    drzi: Predmet[];
}