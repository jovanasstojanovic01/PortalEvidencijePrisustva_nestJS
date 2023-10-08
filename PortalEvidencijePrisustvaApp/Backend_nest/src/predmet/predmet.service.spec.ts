import { Test, TestingModule } from '@nestjs/testing';
import { PredmetService } from './predmet.service';

describe('PredmetService', () => {
  let service: PredmetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredmetService],
    }).compile();

    service = module.get<PredmetService>(PredmetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
