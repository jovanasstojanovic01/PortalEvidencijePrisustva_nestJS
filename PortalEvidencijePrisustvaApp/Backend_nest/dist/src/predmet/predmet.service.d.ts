import { Repository } from 'typeorm';
import { PredmetDTO } from './models/predmet.dto';
import { Predmet } from './models/predmet.entity';
export declare class PredmetService {
    private predmetRepository;
    constructor(predmetRepository: Repository<Predmet>);
    getAll(): Promise<Predmet[]>;
    getById(id: number): Promise<Predmet>;
    create(predmetDTO: PredmetDTO): Promise<Predmet>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: PredmetDTO): Promise<import("typeorm").UpdateResult>;
}
