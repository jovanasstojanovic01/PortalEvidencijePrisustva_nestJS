import { Prisustvo } from "./prisustvo";

export interface Student{
    id: number;
    email: string;
    password: string;
    ime: string;
    prezime: string;
    indeks: number;
    prisustvovao: Prisustvo[];
};