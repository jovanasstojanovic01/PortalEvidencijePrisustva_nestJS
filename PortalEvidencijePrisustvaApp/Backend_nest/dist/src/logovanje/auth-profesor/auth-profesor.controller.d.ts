/// <reference types="passport" />
import { Request as ExpressRequest } from 'express';
import { AuthProfesorService } from './auth-profesor.service';
export declare class AuthProfesorController {
    private authProfesorService;
    constructor(authProfesorService: AuthProfesorService);
    login(req: ExpressRequest): Promise<{
        access_token: string;
    }>;
    logout(): void;
    getAuthStatus(req: ExpressRequest): Promise<Express.User>;
}
