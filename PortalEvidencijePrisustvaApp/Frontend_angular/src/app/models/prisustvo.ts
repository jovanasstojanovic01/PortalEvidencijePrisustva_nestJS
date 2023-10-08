import { Predmet } from "./predmet";
import { Student } from "./student";

export interface Prisustvo{
    id: number;
    prisustvovao: Student;
    broj_odslusanih_casova: number;
    evidentira: Predmet;
}