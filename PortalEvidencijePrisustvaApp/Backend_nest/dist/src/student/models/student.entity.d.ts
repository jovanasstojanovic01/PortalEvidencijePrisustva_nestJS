import { Prisustvo } from "src/prisustvo/models/prisustvo.entity";
export declare class Student {
    id: number;
    email: string;
    password: string;
    ime: string;
    prezime: string;
    indeks: number;
    prisustvovao: Prisustvo[];
}
