/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Administrator } from './model/administrator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { AdministratorDTO } from './model/administrator.dto';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(Administrator)
    private readonly profesorRepository: Repository<Administrator>,
  ) {}

  public async checkIfAdminExists(idProfesora: number) {
    const options: FindOneOptions<Administrator> = {
      where: { id: idProfesora },
    };
    return !!this.profesorRepository.findOne(options);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async create(admin: AdministratorDTO) {
    const newAdmin = this.profesorRepository.create(admin);
    return await this.profesorRepository.save(newAdmin);
  }
}
