/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrisustvoService } from './prisustvo.service';
import { PrisustvoController } from './prisustvo.controller';
import { Prisustvo } from './models/prisustvo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Prisustvo])],
  providers: [PrisustvoService],
  controllers: [PrisustvoController],
  exports:[PrisustvoService]
})
export class PrisustvoModule {}
