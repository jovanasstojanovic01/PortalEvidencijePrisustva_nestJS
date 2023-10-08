/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PrisustvoService } from './prisustvo.service';
import { PrisustvoDTO } from './models/prisustvo.dto';
import { JwtAuthGuard } from 'src/logovanje/auth/utils/jwt.guard';

@Controller('prisustvo')
export class PrisustvoController {
  constructor(private prisustvoService: PrisustvoService) {}

  @Get()
  public getPrisustva() {
    return this.prisustvoService.getAll();
  }

  @Get(':id')
  public getPrisistvo(@Param('id', ParseIntPipe) id: number) {
    return this.prisustvoService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('student/:studentId/predmet/:predmetId')
  async pronadjiPrisustvo(
    @Param('studentId') studentId: number,
    @Param('predmetId') predmetId: number,
  ) {
    return this.prisustvoService.pronadjiPrisustvo(studentId, predmetId);
  }

  @Get(':studentId/predmeti')
  async findAllPredmetiForStudent(@Param('studentId') studentId: number) {
    return this.prisustvoService.findAllPredmetiForStudent(studentId);
  }

  @Post()
  public addPrisustvo(@Body() dto: PrisustvoDTO) {
    return this.prisustvoService.create(dto);
  }

  @Delete('delete/:id')
  public deletePrisustvo(@Param('id', ParseIntPipe) id: number) {
    console.log('brise se prisustvo');
    return this.prisustvoService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('increase-cas-count/:id')
  async increaseCasCount(@Param('id') id: number) {
    return this.prisustvoService.update(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('predmet/:predmetId')
  async getPrisustvaWithStudentInfoByPredmetId(
    @Param('predmetId') predmetId: number,
  ) {
    return this.prisustvoService.getPrisustvaWithStudentInfoByPredmetId(
      predmetId,
    );
  }

  @Get('student/:idStudenta')
  async getPrisustvaForStudent(@Param('idStudenta') idStudenta: number) {
    return this.prisustvoService.getPrisustvaForStudent(idStudenta);
  }

  @Delete('studentDelete/:idStudenta')
  async deletePrisustvaForStudent(@Param('idStudenta') idStudenta: number) {
    return this.prisustvoService.deletePrisustvaForStudent(idStudenta);
  }

  @Delete('poPredmetu/:idPredmeta')
  async deletePrisustvoPoPredmetu(
    @Param('idPredmeta') idPredmeta: number,
  ): Promise<void> {
    await this.prisustvoService.deletePrisustvoPoPredmetu(idPredmeta);
  }

  @Get('poPredmetu/:predmetId')
  async getPrisustvaByPredmetId(@Param('predmetId') predmetId: number) {
    return this.prisustvoService.getPrisustvaByPredmetId(predmetId);
  }
}
