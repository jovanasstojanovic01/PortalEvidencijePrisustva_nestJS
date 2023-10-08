import { PrisustvoPoCasu } from './model/PrisustvoPoCasu.entity';
import { Repository } from 'typeorm';
import { PrisustvoPoCasuDTO } from './model/PrisustvoPoCasu.dto';
import { PrisustvoService } from 'src/prisustvo/prisustvo.service';
export declare class PrisustvoPoCasuService {
    private readonly prisustvoPoCasuRepository;
    private prisustvoService;
    constructor(prisustvoPoCasuRepository: Repository<PrisustvoPoCasu>, prisustvoService: PrisustvoService);
    proveriPrisustvoPoCasu(casId: number, prisustvoId: number): Promise<PrisustvoPoCasu | null>;
    create(createDto: PrisustvoPoCasuDTO): Promise<PrisustvoPoCasu>;
    countPrisustvoPoCasuByCasAndPredmet(predmetId: number): Promise<any[]>;
    deletePrisustvaForStudent(idStudenta: number): Promise<void>;
    deletePrisustvaForPisustvo(idPrisustva: number): Promise<void>;
}
