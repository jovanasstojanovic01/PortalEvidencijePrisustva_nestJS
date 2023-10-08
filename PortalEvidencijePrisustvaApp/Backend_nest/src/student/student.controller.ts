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
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from './models/student.dto';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  public getStudente() {
    return this.studentService.getAll();
  }

  @Get('email/:email')
  public getStudentByEmail(@Param('email') email: string) {
    return this.studentService.findByEmail(email);
  }

  @Get('indeks/:indeks')
  public getStudentByIndeks(@Param('indeks') indeks: number) {
    return this.studentService.findByIndeks(indeks);
  }

  @Get(':id')
  public getStudent(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.getById(id);
  }

  @Post()
  public addStudent(@Body() dto: StudentDTO) {
    return this.studentService.create(dto);
  }

  @Delete(':id')
  public deleteStudent(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.delete(id);
  }

  @Put(':id')
  public updateSong(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: StudentDTO,
  ) {
    return this.studentService.update(id, dto);
  }
}
