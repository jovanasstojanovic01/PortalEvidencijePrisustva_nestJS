import { TestBed } from '@angular/core/testing';

import { PrisustvoService } from './prisustvo.service';

describe('PrisustvoService', () => {
  let service: PrisustvoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrisustvoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
