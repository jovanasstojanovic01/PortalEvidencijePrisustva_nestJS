import { ProfesorService } from 'src/profesor/profesor.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthProfesorService {
    private profesorService;
    private jwtService;
    constructor(profesorService: ProfesorService, jwtService: JwtService);
    validateProfesor(email: string, password: string): Promise<import("../../profesor/models/profesor.entity").Profesor>;
    loginProfesor(profesor: any): Promise<{
        access_token: string;
    }>;
    logoutProfesor(): void;
}
