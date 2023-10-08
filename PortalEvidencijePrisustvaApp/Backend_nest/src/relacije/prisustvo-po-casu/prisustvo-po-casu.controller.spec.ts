/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { PrisustvoPoCasuController } from './prisustvo-po-casu.controller';

describe('PrisustvoPoCasuController', () => {
  let controller: PrisustvoPoCasuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrisustvoPoCasuController],
    }).compile();

    controller = module.get<PrisustvoPoCasuController>(PrisustvoPoCasuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
