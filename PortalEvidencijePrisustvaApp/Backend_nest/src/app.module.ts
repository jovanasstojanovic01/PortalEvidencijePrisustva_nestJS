/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { ProfesorController } from './profesor/profesor.controller';
import { PredmetController } from './predmet/predmet.controller';
import { PrisustvoController } from './prisustvo/prisustvo.controller';
import { CasController } from './cas/cas.controller';
import { StudentModule } from './student/student.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PredmetModule } from './predmet/predmet.module';
import { PrisustvoModule } from './prisustvo/prisustvo.module';
import { CasModule } from './cas/cas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { AuthModule } from './logovanje/auth/auth.module';
import { AuthProfesorModule } from './logovanje/auth-profesor/auth-profesor.module';
import { PrisustvoPoCasuController } from './relacije/prisustvo-po-casu/prisustvo-po-casu.controller';
import { PrisustvoPoCasuModule } from './relacije/prisustvo-po-casu/prisustvo-po-casu.module';
import { AdministratorController } from './relacije/administrator/administrator.controller';
import { AdministratorModule } from './relacije/administrator/administrator.module';

@Module({
  imports: [
    StudentModule,
    ProfesorModule,
    PredmetModule,
    PrisustvoModule,
    CasModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    AuthProfesorModule,
    PrisustvoPoCasuModule,
    AdministratorModule,
  ],
  controllers: [
    AppController,
    StudentController,
    ProfesorController,
    PredmetController,
    PrisustvoController,
    CasController,
    PrisustvoPoCasuController,
    AdministratorController,
  ],
  providers: [AppService],
})
export class AppModule {}
