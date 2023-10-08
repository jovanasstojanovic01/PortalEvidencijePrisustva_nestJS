/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Request, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request as ExpressRequest } from 'express';
import { LocalAuthGuard } from './utils/LocalGuard';
import { JwtAuthGuard } from './utils/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: ExpressRequest) {
    console.log(req);
    return this.authService.loginStudent(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout() {
    this.authService.logoutStudent();
  }

  @Get('status')
  async getAuthStatus(@Req() req: ExpressRequest) {
    return req.user;
  }
}
