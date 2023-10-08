import { PredmetService } from './predmet.service';
import { PredmetDTO } from './models/predmet.dto';
export declare class PredmetController {
    private predmetService;
    constructor(predmetService: PredmetService);
    getPredmete(): Promise<import("./models/predmet.entity").Predmet[]>;
    getPredmet(id: number): Promise<import("./models/predmet.entity").Predmet>;
    addPredmet(dto: PredmetDTO): Promise<import("./models/predmet.entity").Predmet>;
    deletePredmet(id: number): Promise<import("typeorm").DeleteResult>;
    updateSong(id: number, dto: PredmetDTO): Promise<import("typeorm").UpdateResult>;
}
