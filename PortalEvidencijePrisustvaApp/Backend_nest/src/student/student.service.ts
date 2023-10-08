/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Student } from './models/student.entity';
import { StudentDTO } from './models/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  list: Student[] = [
    {
      id: 0,
      email: '',
      password: '',
      ime: '',
      prezime: '',
      indeks: 18417,
      prisustvovao: [],
    },
  ];

  public getAll() {
    return this.studentRepository.find();
  }

  public async getById(id: number) {
    const options: FindOneOptions<Student> = {
      where: { id: id },
    };
    return this.studentRepository.findOne(options);
  }

  public async create(studentDTO: StudentDTO) {
    const student = this.studentRepository.create(studentDTO);
    return await this.studentRepository.save(student);
  }

  public async delete(id: number) {
    return await this.studentRepository.delete(id);
  }

  public async update(id: number, dto: StudentDTO) {
    return await this.studentRepository.update(id, dto);
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = await this.studentRepository.findOne({ where: { email } });

    if (!student) {
      throw new NotFoundException(`Student with email ${email} not found`);
    }

    return student;
  }
  async findByIndeks(indeks: number): Promise<Student | null> {
    const student = await this.studentRepository.findOne({ where: { indeks } });

    if (!student) {
      throw new NotFoundException(`Student with email ${indeks} not found`);
    }

    return student;
  }
}
