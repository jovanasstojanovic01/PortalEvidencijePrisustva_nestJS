/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PrisustvoPoCasuService } from './prisustvo-po-casu.service';
import { PrisustvoPoCasuDTO } from './model/PrisustvoPoCasu.dto';
import { JwtAuthGuard } from 'src/logovanje/auth/utils/jwt.guard';

@Controller('prisustvo-po-casu')
export class PrisustvoPoCasuController {
  constructor(private prisustvoPoCasuService: PrisustvoPoCasuService) {}

  @UseGuards(JwtAuthGuard)
  @Get('cas/:casId/prisustvo/:prisustvoId')
  async proveriPrisustvoPoCasu(
    @Param('casId') casId: number,
    @Param('prisustvoId') prisustvoId: number,
  ) {
    const prisustvoPoCasu =
      await this.prisustvoPoCasuService.proveriPrisustvoPoCasu(
        casId,
        prisustvoId,
      );

    if (!prisustvoPoCasu) {
      return false;
    }

    return true;
  }

  @Post()
  async createPrisustvoPoCasu(
    @Body() createDto: PrisustvoPoCasuDTO,
  ): Promise<any> {
    return this.prisustvoPoCasuService.create(createDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('predmet/:predmetId/casovi/count')
  async countPrisustvoPoCasuByPredmet(
    @Param('predmetId') predmetId: number,
  ): Promise<any[]> {
    return this.prisustvoPoCasuService.countPrisustvoPoCasuByCasAndPredmet(
      predmetId,
    );
  }

  @Delete('student/:idStudenta')
  async deletePrisustvoPoCasuForStudent(
    @Param('idStudenta') idStudenta: number,
  ): Promise<void> {
    await this.prisustvoPoCasuService.deletePrisustvaForStudent(idStudenta);
  }

  @Delete('prisustvo/:idPrisustva')
  async deletePrisustvoPoCasuForPrisustvo(
    @Param('idPrisustva') idPrisustva: number,
  ): Promise<void> {
    await this.prisustvoPoCasuService.deletePrisustvaForPisustvo(idPrisustva);
  }
}
