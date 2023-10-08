import { Test, TestingModule } from '@nestjs/testing';
import { PredmetController } from './predmet.controller';

describe('PredmetController', () => {
  let controller: PredmetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PredmetController],
    }).compile();

    controller = module.get<PredmetController>(PredmetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
