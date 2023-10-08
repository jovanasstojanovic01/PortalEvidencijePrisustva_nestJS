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
import { PredmetService } from './predmet.service';
import { PredmetDTO } from './models/predmet.dto';
import { JwtAuthGuard } from 'src/logovanje/auth/utils/jwt.guard';

@Controller('predmet')
export class PredmetController {
  constructor(private predmetService: PredmetService) {}

  @Get()
  public getPredmete() {
    return this.predmetService.getAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public getPredmet(@Param('id', ParseIntPipe) id: number) {
    return this.predmetService.getById(id);
  }

  @Post()
  public addPredmet(@Body() dto: PredmetDTO) {
    return this.predmetService.create(dto);
  }

  @Delete(':id')
  public deletePredmet(@Param('id', ParseIntPipe) id: number) {
    console.log('ovde sam u delete');
    return this.predmetService.delete(id);
  }

  @Put(':id')
  public updateSong(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PredmetDTO,
  ) {
    return this.predmetService.update(id, dto);
  }
}
