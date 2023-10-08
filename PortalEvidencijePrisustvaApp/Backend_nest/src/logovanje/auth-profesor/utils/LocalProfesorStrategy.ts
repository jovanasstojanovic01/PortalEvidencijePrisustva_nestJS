/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthProfesorService } from "../auth-profesor.service";

@Injectable()
export class LocalProfesorStrategy extends PassportStrategy(Strategy, 'profesor'){
    constructor(private authProfesorService:AuthProfesorService){
        super({
            usernameField:'email',
        });
    }

    async validate(email:string, password: string){
        const profesor = await this.authProfesorService.validateProfesor(email,password);
        if(!profesor){
            throw new UnauthorizedException();
        }
        return profesor;
    }

}