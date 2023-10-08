import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthenticatedProfesorGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<any>;
}
