import { Strategy } from "passport-local";
import { AuthProfesorService } from "../auth-profesor.service";
declare const LocalProfesorStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalProfesorStrategy extends LocalProfesorStrategy_base {
    private authProfesorService;
    constructor(authProfesorService: AuthProfesorService);
    validate(email: string, password: string): Promise<import("../../../profesor/models/profesor.entity").Profesor>;
}
export {};
