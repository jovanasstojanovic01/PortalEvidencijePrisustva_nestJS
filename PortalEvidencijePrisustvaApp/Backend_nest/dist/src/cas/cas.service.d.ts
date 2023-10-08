import { Repository } from 'typeorm';
import { Cas } from './models/cas.entity';
import { CasDTO } from './models/cas.dto';
export declare class CasService {
    private casRepository;
    constructor(casRepository: Repository<Cas>);
    getAll(): Promise<Cas[]>;
    getById(id: number): Promise<Cas>;
    create(casDTO: CasDTO): Promise<Cas>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: CasDTO): Promise<import("typeorm").UpdateResult>;
    pretraziCasovePoSifri(sifraCasa: string): Promise<Cas>;
    countCasoviByPredmetId(predmetId: number): Promise<number>;
    getPredmetIdByCasId(casId: number): Promise<number>;
    getCasIdsByPredmetId(predmetId: number): Promise<any[]>;
    deleteCasPoPredmetu(idPredmeta: number): Promise<void>;
}
