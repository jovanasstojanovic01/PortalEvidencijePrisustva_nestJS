import { Test, TestingModule } from '@nestjs/testing';
import { PrisustvoController } from './prisustvo.controller';

describe('PrisustvoController', () => {
  let controller: PrisustvoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrisustvoController],
    }).compile();

    controller = module.get<PrisustvoController>(PrisustvoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
