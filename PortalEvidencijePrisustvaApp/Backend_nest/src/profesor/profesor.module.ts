/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { Profesor } from './models/profesor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Profesor])],
  providers: [ProfesorService],
  controllers: [ProfesorController],
  exports:[ProfesorService]
})
export class ProfesorModule {}
