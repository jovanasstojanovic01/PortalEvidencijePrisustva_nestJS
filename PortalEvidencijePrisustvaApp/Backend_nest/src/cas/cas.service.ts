/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Cas } from './models/cas.entity';
import { CasDTO } from './models/cas.dto';

@Injectable()
export class CasService {
  constructor(@InjectRepository(Cas) private casRepository: Repository<Cas>) {}

  public getAll() {
    return this.casRepository.find();
  }

  public async getById(id: number) {
    const options: FindOneOptions<Cas> = {
      where: { id: id },
    };
    return this.casRepository.findOne(options);
  }

  public async create(casDTO: CasDTO) {
    const cas = this.casRepository.create(casDTO);
    return await this.casRepository.save(cas);
  }

  public async delete(id: number) {
    return await this.casRepository.delete(id);
  }

  public async update(id: number, dto: CasDTO) {
    return await this.casRepository.update(id, dto);
  }

  async pretraziCasovePoSifri(sifraCasa: string) {
    const casovi = await this.casRepository.find({
      where: {
        sifra: sifraCasa,
      },
    });

    if (!casovi || casovi.length === 0) {
      throw new NotFoundException(
        `Nijedan čas sa nazivom '${sifraCasa}' nije pronađen.`,
      );
    }

    console.log(casovi[0]);
    return casovi[0];
  }

  async countCasoviByPredmetId(predmetId: number): Promise<number> {
    return this.casRepository.count({ where: { ima: { id: predmetId } } });
  }

  async getPredmetIdByCasId(casId: number) {
    const cas = await this.casRepository
      .createQueryBuilder('cas')
      .leftJoinAndSelect('cas.ima', 'predmet')
      .where('cas.id = :casId', { casId: casId })
      .getOne();

    //console.log(cas.ima);
    return cas.ima.id;
  }

  async getCasIdsByPredmetId(predmetId: number): Promise<any[]> {
    const casIds = await this.casRepository
      .createQueryBuilder('cas')
      .leftJoin('cas.ima', 'predmet')
      .where('predmet.id = :predmetId', { predmetId })
      .select('cas.id')
      .getRawMany();

    console.log('evo me', casIds);

    const novi = casIds.map(({ cas_id }) => ({
      cas_id: cas_id,
      casCount: 0,
    }));
    console.log('ovde sad', novi);

    return novi;
  }

  async deleteCasPoPredmetu(idPredmeta: number) {
    await this.casRepository.delete({
      ima: { id: idPredmeta },
    });
  }
}
