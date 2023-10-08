import { Test, TestingModule } from '@nestjs/testing';
import { AuthProfesorController } from './auth-profesor.controller';

describe('AuthProfesorController', () => {
  let controller: AuthProfesorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthProfesorController],
    }).compile();

    controller = module.get<AuthProfesorController>(AuthProfesorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
