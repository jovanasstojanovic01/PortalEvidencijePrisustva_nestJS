import { CasService } from './cas.service';
import { CasDTO } from './models/cas.dto';
export declare class CasController {
    private casService;
    constructor(casService: CasService);
    getCasove(): Promise<import("./models/cas.entity").Cas[]>;
    getCas(id: number): Promise<import("./models/cas.entity").Cas>;
    pretraziCasove(sifra: string): Promise<import("./models/cas.entity").Cas>;
    getPredmetIdByCasId(casId: number): Promise<number>;
    getCountByPredmetId(predmetId: number): Promise<number>;
    addCas(dto: CasDTO): Promise<import("./models/cas.entity").Cas>;
    deleteCas(id: number): Promise<import("typeorm").DeleteResult>;
    updateSong(id: number, dto: CasDTO): Promise<import("typeorm").UpdateResult>;
    getCasIdsByPredmetId(predmetId: number): Promise<any[]>;
    deleteCasPoPredmetu(idPredmeta: number): Promise<void>;
}
