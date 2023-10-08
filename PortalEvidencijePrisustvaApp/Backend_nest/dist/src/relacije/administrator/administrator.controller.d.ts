import { AdministratorService } from './administrator.service';
import { AdministratorDTO } from './model/administrator.dto';
export declare class AdministratorController {
    private readonly adminService;
    constructor(adminService: AdministratorService);
    create(admin: AdministratorDTO): void;
    checkIfAdminExists(profesorId: number): Promise<boolean>;
}
