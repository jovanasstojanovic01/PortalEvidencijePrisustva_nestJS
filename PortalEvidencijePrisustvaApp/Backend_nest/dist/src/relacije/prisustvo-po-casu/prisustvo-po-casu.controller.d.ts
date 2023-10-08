import { PrisustvoPoCasuService } from './prisustvo-po-casu.service';
import { PrisustvoPoCasuDTO } from './model/PrisustvoPoCasu.dto';
export declare class PrisustvoPoCasuController {
    private prisustvoPoCasuService;
    constructor(prisustvoPoCasuService: PrisustvoPoCasuService);
    proveriPrisustvoPoCasu(casId: number, prisustvoId: number): Promise<boolean>;
    createPrisustvoPoCasu(createDto: PrisustvoPoCasuDTO): Promise<any>;
    countPrisustvoPoCasuByPredmet(predmetId: number): Promise<any[]>;
    deletePrisustvoPoCasuForStudent(idStudenta: number): Promise<void>;
    deletePrisustvoPoCasuForPrisustvo(idPrisustva: number): Promise<void>;
}
