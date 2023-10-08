import { Test, TestingModule } from '@nestjs/testing';
import { PrisustvoService } from './prisustvo.service';

describe('PrisustvoService', () => {
  let service: PrisustvoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrisustvoService],
    }).compile();

    service = module.get<PrisustvoService>(PrisustvoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
