/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { AuthProfesorService } from './auth-profesor.service';
import { LocalProfesorAuthGuard } from './utils/LocalProfesorGuard';
import { JwtAuthGuard } from '../auth/utils/jwt.guard';

@Controller('auth-profesor')
export class AuthProfesorController {
  constructor(private authProfesorService: AuthProfesorService) {}

  @UseGuards(LocalProfesorAuthGuard)
  @Post('login')
  async login(@Request() req: ExpressRequest) {
    console.log(req);
    return this.authProfesorService.loginProfesor(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout() {
    this.authProfesorService.logoutProfesor();
  }

  @Get('status')
  async getAuthStatus(@Req() req: ExpressRequest) {
    return req.user;
  }
}
