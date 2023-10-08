import { Administrator } from './model/administrator.entity';
import { Repository } from 'typeorm';
import { AdministratorDTO } from './model/administrator.dto';
export declare class AdministratorService {
    private readonly profesorRepository;
    constructor(profesorRepository: Repository<Administrator>);
    checkIfAdminExists(idProfesora: number): Promise<boolean>;
    create(admin: AdministratorDTO): Promise<Administrator>;
}
