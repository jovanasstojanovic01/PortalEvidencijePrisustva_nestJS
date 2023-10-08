import { Predmet } from "src/predmet/models/predmet.entity";
export declare class Profesor {
    id: number;
    email: string;
    password: string;
    ime: string;
    prezime: string;
    drzi: Predmet[];
}
