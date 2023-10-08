/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthProfesorService } from './auth-profesor.service';
import { AuthProfesorController } from './auth-profesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from 'src/profesor/models/profesor.entity';
import { PassportModule } from '@nestjs/passport';
import { ProfesorService } from 'src/profesor/profesor.service';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/environments/envinronment';
import { LocalProfesorStrategy } from './utils/LocalProfesorStrategy';
import { JwtStrategy } from '../auth/utils/jwt.strategy';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profesor]),
    PassportModule.register({
      defaultStrategy: 'jwt', // Postavite podrazumevanu strategiju na JWT
    }),
    JwtModule.register({
      secret: environment.jwt_secret,
      signOptions: { expiresIn: '60s' },
    }),
    StudentModule,
  ],
  controllers: [AuthProfesorController],
  providers: [
    AuthProfesorService,
    ProfesorService,
    LocalProfesorStrategy,
    JwtStrategy,
  ],
  exports: [AuthProfesorService],
})
export class AuthProfesorModule {}
