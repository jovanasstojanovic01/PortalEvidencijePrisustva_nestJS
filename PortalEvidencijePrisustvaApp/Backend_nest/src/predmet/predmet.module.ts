/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PredmetService } from './predmet.service';
import { PredmetController } from './predmet.controller';
import { Predmet } from './models/predmet.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Predmet])],
  providers: [PredmetService],
  controllers: [PredmetController],
  exports:[PredmetService]
})
export class PredmetModule {}
