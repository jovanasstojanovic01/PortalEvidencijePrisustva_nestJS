import { Predmet } from "src/predmet/models/predmet.entity";
import { PrisustvoPoCasu } from "src/relacije/prisustvo-po-casu/model/PrisustvoPoCasu.entity";
import { Student } from "src/student/models/student.entity";
export declare class Prisustvo {
    id: number;
    prisustvovao: Student;
    broj_odslusanih_casova: number;
    evidentira: Predmet;
    prisustvoPoCasu: PrisustvoPoCasu[];
}
