/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasService } from './cas.service';
import { CasController } from './cas.controller';
import { Cas } from './models/cas.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Cas])],
  providers: [CasService],
  controllers: [CasController],
  exports:[CasService]
})
export class CasModule {}
