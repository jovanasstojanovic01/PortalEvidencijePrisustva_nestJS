import { Test, TestingModule } from '@nestjs/testing';
import { AuthProfesorService } from './auth-profesor.service';

describe('AuthProfesorService', () => {
  let service: AuthProfesorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthProfesorService],
    }).compile();

    service = module.get<AuthProfesorService>(AuthProfesorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
