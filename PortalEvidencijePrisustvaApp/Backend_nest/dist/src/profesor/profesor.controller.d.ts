import { ProfesorService } from './profesor.service';
import { ProfesorDTO } from './models/profesor.dto';
export declare class ProfesorController {
    private profesorService;
    constructor(profesorService: ProfesorService);
    getPredmetiByProfesorId(profesorId: number): Promise<import("../predmet/models/predmet.entity").Predmet[]>;
    getProfesore(): Promise<import("./models/profesor.entity").Profesor[]>;
    getProfesor(id: number): Promise<import("./models/profesor.entity").Profesor>;
    addProfesor(dto: ProfesorDTO): Promise<import("./models/profesor.entity").Profesor>;
    deleteProfesor(id: number): Promise<import("typeorm").DeleteResult>;
    updateSong(id: number, dto: ProfesorDTO): Promise<import("typeorm").UpdateResult>;
    getProfesorByEmail(email: string): Promise<import("./models/profesor.entity").Profesor>;
}
