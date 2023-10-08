/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrisustvoPoCasu } from './model/PrisustvoPoCasu.entity';
import { Repository } from 'typeorm';
import { PrisustvoPoCasuDTO } from './model/PrisustvoPoCasu.dto';
import { PrisustvoService } from 'src/prisustvo/prisustvo.service';

@Injectable()
export class PrisustvoPoCasuService {
  constructor(
    @InjectRepository(PrisustvoPoCasu)
    private readonly prisustvoPoCasuRepository: Repository<PrisustvoPoCasu>,
    private prisustvoService: PrisustvoService,
  ) {}

  async proveriPrisustvoPoCasu(
    casId: number,
    prisustvoId: number,
  ): Promise<PrisustvoPoCasu | null> {
    return this.prisustvoPoCasuRepository.findOne({
      where: {
        cas: { id: casId },
        prisustvo: { id: prisustvoId },
      },
    });
  }

  async create(createDto: PrisustvoPoCasuDTO): Promise<PrisustvoPoCasu> {
    const prisustvoPoCasu = this.prisustvoPoCasuRepository.create(createDto);
    return await this.prisustvoPoCasuRepository.save(prisustvoPoCasu);
  }

  async countPrisustvoPoCasuByCasAndPredmet(predmetId: number): Promise<any[]> {
    const casovi = await this.prisustvoPoCasuRepository
      .createQueryBuilder('prisustvoPoCasu')
      .leftJoinAndSelect('prisustvoPoCasu.cas', 'cas')
      .leftJoinAndSelect('cas.ima', 'predmet')
      .where('predmet.id = :predmetId', { predmetId })
      .select('cas.id')
      .addSelect('COUNT(cas.id)', 'casCount')
      .groupBy('cas.id')
      .getRawMany();

    //console.log(casovi);
    const casoviSaBrojem = casovi.map(({ cas_id, casCount }) => ({
      cas_id,
      casCount: parseInt(casCount),
    }));

    console.log(casoviSaBrojem);
    return casoviSaBrojem;
  }

  async deletePrisustvaForStudent(idStudenta: number) {
    try {
      const prisustva =
        await this.prisustvoService.getPrisustvaForStudent(idStudenta);

      for (const prisustvo of prisustva) {
        await this.prisustvoPoCasuRepository.delete({
          prisustvo: { id: prisustvo.id },
        });
      }
    } catch (error) {
      console.error('Greška prilikom brisanja prisustvaPoCasu:', error);
      throw error;
    }
  }

  async deletePrisustvaForPisustvo(idPrisustva: number) {
    await this.prisustvoPoCasuRepository.delete({
      prisustvo: { id: idPrisustva },
    });
  }
}
