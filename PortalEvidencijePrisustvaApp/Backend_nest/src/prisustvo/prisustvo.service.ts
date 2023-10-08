/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Prisustvo } from './models/prisustvo.entity';
import { PrisustvoDTO } from './models/prisustvo.dto';

@Injectable()
export class PrisustvoService {
  constructor(
    @InjectRepository(Prisustvo)
    private prisustvoRepository: Repository<Prisustvo>,
  ) {}

  public getAll() {
    return this.prisustvoRepository.find();
  }

  public async getById(id: number) {
    const options: FindOneOptions<Prisustvo> = {
      where: { id: id },
    };
    return this.prisustvoRepository.findOne(options);
  }

  public async create(prisustvoDTO: PrisustvoDTO) {
    const prisustvo = this.prisustvoRepository.create(prisustvoDTO);
    return await this.prisustvoRepository.save(prisustvo);
  }

  public async delete(id: number) {
    return await this.prisustvoRepository.delete(id);
  }

  public async update(id: number) {
    const prisustvo = await this.getById(id);

    if (!prisustvo) {
      throw new NotFoundException(`Prisustvo with ID ${id} not found`);
    }

    prisustvo.broj_odslusanih_casova += 1;

    return this.prisustvoRepository.update(id, prisustvo);
  }

  public async pronadjiPrisustvo(
    studentId: number,
    predmetId: number,
  ): Promise<Prisustvo | null> {
    const prisustvo = await this.prisustvoRepository.findOne({
      where: {
        prisustvovao: { id: studentId },
        evidentira: { id: predmetId },
      },
    });

    return prisustvo;
  }

  public async getPrisustvaWithStudentInfoByPredmetId(predmetId: number) {
    return this.prisustvoRepository
      .createQueryBuilder('prisustvo')
      .leftJoinAndSelect('prisustvo.evidentira', 'predmet')
      .leftJoinAndSelect('prisustvo.prisustvovao', 'student')
      .where('predmet.id = :predmetId', { predmetId })
      .select([
        'prisustvo',
        'student.id',
        'student.indeks',
        'student.ime',
        'student.prezime',
      ])
      .getMany();
  }

  async getPrisustvaForStudent(idStudenta: number) {
    return this.prisustvoRepository
      .createQueryBuilder('prisustvo')
      .select(['prisustvo.id'])
      .innerJoin('prisustvo.prisustvovao', 'student')
      .where('student.id = :idStudenta', { idStudenta })
      .getMany();
  }
  async deletePrisustvaForStudent(idStudenta: number) {
    const prisustva = await this.getPrisustvaForStudent(idStudenta);
    prisustva.forEach((element) => {
      this.delete(element.id);
    });
  }

  async deletePrisustvoPoPredmetu(idPredmeta: number) {
    await this.prisustvoRepository.delete({
      evidentira: { id: idPredmeta },
    });
  }

  async getPrisustvaByPredmetId(predmetId: number) {
    return await this.prisustvoRepository.find({
      where: { evidentira: { id: predmetId } },
    });
  }

  async findAllPredmetiForStudent(studentId: number) {
    return this.prisustvoRepository
      .createQueryBuilder('prisustvo')
      .select([
        'student.id',
        'predmet.id',
        'predmet.naziv as naziv',
        'prisustvo.broj_odslusanih_casova',
        'prisustvo',
      ])
      .innerJoin('prisustvo.evidentira', 'predmet')
      .innerJoin('prisustvo.prisustvovao', 'student')
      .where('student.id = :studentId', { studentId })
      .getRawMany();
  }
}
