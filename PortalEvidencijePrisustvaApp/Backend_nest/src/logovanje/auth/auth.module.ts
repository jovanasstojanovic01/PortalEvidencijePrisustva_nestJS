/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/student/models/student.entity';
import { PassportModule } from '@nestjs/passport';
import { StudentService } from 'src/student/student.service';
import { LocalStrategy } from './utils/LocalStrategy';
import { JwtModule } from '@nestjs/jwt';
import { environment } from 'src/environments/envinronment';
import { JwtStrategy } from './utils/jwt.strategy';
import { ProfesorModule } from 'src/profesor/profesor.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    PassportModule,
    JwtModule.register({
      secret: environment.jwt_secret,
      signOptions: { expiresIn: '3600s' },
    }),
    ProfesorModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, StudentService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
