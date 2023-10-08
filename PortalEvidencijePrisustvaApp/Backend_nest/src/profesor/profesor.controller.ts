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
import { ProfesorService } from './profesor.service';
import { ProfesorDTO } from './models/profesor.dto';
import { JwtAuthGuard } from 'src/logovanje/auth/utils/jwt.guard';

@Controller('profesor')
export class ProfesorController {
  constructor(private profesorService: ProfesorService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':profesorId/predmeti')
  async getPredmetiByProfesorId(@Param('profesorId') profesorId: number) {
    return this.profesorService.getPredmetiByProfesorId(profesorId);
  }

  @Get()
  public getProfesore() {
    return this.profesorService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public getProfesor(@Param('id', ParseIntPipe) id: number) {
    return this.profesorService.getById(id);
  }

  @Post()
  public addProfesor(@Body() dto: ProfesorDTO) {
    return this.profesorService.create(dto);
  }

  @Delete(':id')
  public deleteProfesor(@Param('id', ParseIntPipe) id: number) {
    return this.profesorService.delete(id);
  }

  @Put(':id')
  public updateSong(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ProfesorDTO,
  ) {
    return this.profesorService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('email/:email')
  public getProfesorByEmail(@Param('email') email: string) {
    return this.profesorService.findByEmail(email);
  }
}
