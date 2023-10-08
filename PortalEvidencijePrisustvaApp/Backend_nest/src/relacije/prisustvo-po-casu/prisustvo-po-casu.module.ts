/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrisustvoPoCasu } from './model/PrisustvoPoCasu.entity';
import { PrisustvoPoCasuService } from './prisustvo-po-casu.service';
import { PrisustvoPoCasuController } from './prisustvo-po-casu.controller';
import { PrisustvoService } from 'src/prisustvo/prisustvo.service';
import { Prisustvo } from 'src/prisustvo/models/prisustvo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrisustvoPoCasu, Prisustvo])],
  providers: [PrisustvoPoCasuService, PrisustvoService],
  controllers: [PrisustvoPoCasuController],
  exports: [PrisustvoPoCasuService],
})
export class PrisustvoPoCasuModule {}
