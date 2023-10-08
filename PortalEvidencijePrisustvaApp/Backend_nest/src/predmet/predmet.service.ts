/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { PredmetDTO } from './models/predmet.dto';
import { Predmet } from './models/predmet.entity';

@Injectable()
export class PredmetService {
  constructor(
    @InjectRepository(Predmet) private predmetRepository: Repository<Predmet>,
  ) {}

  public getAll() {
    return this.predmetRepository.find();
  }

  public async getById(id: number) {
    const options: FindOneOptions<Predmet> = {
      where: { id: id },
    };
    return this.predmetRepository.findOne(options);
  }

  public async create(predmetDTO: PredmetDTO) {
    const predmet = this.predmetRepository.create(predmetDTO);
    return await this.predmetRepository.save(predmet);
  }

  public async delete(id: number) {
    console.log('ovde sam u delete');
    const existingPredmet = await this.predmetRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!existingPredmet) {
      throw new NotFoundException(`Predmet sa ID ${id} ne postoji.`);
    }
    return await this.predmetRepository.delete(id);
  }

  public async update(id: number, dto: PredmetDTO) {
    return await this.predmetRepository.update(id, dto);
  }
}
