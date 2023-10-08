/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './models/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController],
  exports:[StudentService]
})
export class StudentModule {}
