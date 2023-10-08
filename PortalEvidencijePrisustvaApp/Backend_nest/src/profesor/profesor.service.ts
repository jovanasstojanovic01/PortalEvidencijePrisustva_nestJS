/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Profesor } from './models/profesor.entity';
import { ProfesorDTO } from './models/profesor.dto';
import { Predmet } from 'src/predmet/models/predmet.entity';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepository: Repository<Profesor>,
  ) {}

  list: Profesor[] = [
    {
      id: 0,
      email: '',
      password: '',
      ime: '',
      prezime: '',
      drzi: [],
    },
  ];

  public getAll() {
    return this.profesorRepository.find();
  }

  public async getById(id: number) {
    console.log('ovde');
    const options: FindOneOptions<Profesor> = {
      where: { id: id },
    };
    return this.profesorRepository.findOne(options);
  }

  public async create(profesorDTO: ProfesorDTO) {
    const profesor = this.profesorRepository.create(profesorDTO);
    return await this.profesorRepository.save(profesor);
  }

  public async delete(id: number) {
    return await this.profesorRepository.delete(id);
  }

  public async update(id: number, dto: ProfesorDTO) {
    return await this.profesorRepository.update(id, dto);
  }

  async findByEmail(email: string): Promise<Profesor | null> {
    const profesor = await this.profesorRepository.findOne({
      where: { email },
    });

    if (!profesor) {
      return null;
    }

    return profesor;
  }

  async getPredmetiByProfesorId(profesorId: number): Promise<Predmet[]> {
    const profesor = await this.profesorRepository.find({
      where: { id: profesorId },
      relations: ['drzi'],
    });

    if (!profesor[0]) {
      return null;
    }

    return profesor[0].drzi;
  }
}
