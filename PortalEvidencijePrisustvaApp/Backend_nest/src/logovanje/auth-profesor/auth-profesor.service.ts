/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProfesorService } from 'src/profesor/profesor.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthProfesorService {
  constructor(
    private profesorService: ProfesorService,
    private jwtService: JwtService,
  ) {}

  async validateProfesor(email: string, password: string) {
    console.log('inside validate');
    const profesorDB = await this.profesorService.findByEmail(email);
    if (profesorDB && profesorDB.password === password) {
      console.log(profesorDB);
      return profesorDB;
    }
    return null;
  }

  async loginProfesor(profesor: any) {
    const payload = { name: profesor.email, sub: profesor.id };

    console.log('ovde');
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  logoutProfesor() {}
}
