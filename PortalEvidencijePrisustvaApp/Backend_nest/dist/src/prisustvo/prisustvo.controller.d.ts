import { PrisustvoService } from './prisustvo.service';
import { PrisustvoDTO } from './models/prisustvo.dto';
export declare class PrisustvoController {
    private prisustvoService;
    constructor(prisustvoService: PrisustvoService);
    getPrisustva(): Promise<import("./models/prisustvo.entity").Prisustvo[]>;
    getPrisistvo(id: number): Promise<import("./models/prisustvo.entity").Prisustvo>;
    pronadjiPrisustvo(studentId: number, predmetId: number): Promise<import("./models/prisustvo.entity").Prisustvo>;
    findAllPredmetiForStudent(studentId: number): Promise<any[]>;
    addPrisustvo(dto: PrisustvoDTO): Promise<import("./models/prisustvo.entity").Prisustvo>;
    deletePrisustvo(id: number): Promise<import("typeorm").DeleteResult>;
    increaseCasCount(id: number): Promise<import("typeorm").UpdateResult>;
    getPrisustvaWithStudentInfoByPredmetId(predmetId: number): Promise<import("./models/prisustvo.entity").Prisustvo[]>;
    getPrisustvaForStudent(idStudenta: number): Promise<import("./models/prisustvo.entity").Prisustvo[]>;
    deletePrisustvaForStudent(idStudenta: number): Promise<void>;
    deletePrisustvoPoPredmetu(idPredmeta: number): Promise<void>;
    getPrisustvaByPredmetId(predmetId: number): Promise<import("./models/prisustvo.entity").Prisustvo[]>;
}
