import { Test, TestingModule } from '@nestjs/testing';
import { PrisustvoPoCasuService } from './prisustvo-po-casu.service';

describe('PrisustvoPoCasuService', () => {
  let service: PrisustvoPoCasuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrisustvoPoCasuService],
    }).compile();

    service = module.get<PrisustvoPoCasuService>(PrisustvoPoCasuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
