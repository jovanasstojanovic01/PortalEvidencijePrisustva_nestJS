/// <reference types="passport" />
import { AuthService } from './auth.service';
import { Request as ExpressRequest } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: ExpressRequest): Promise<{
        access_token: string;
    }>;
    logout(): void;
    getAuthStatus(req: ExpressRequest): Promise<Express.User>;
}
