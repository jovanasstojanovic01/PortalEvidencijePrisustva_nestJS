import { TestBed } from '@angular/core/testing';

import { PrisustvoPoCasuService } from './prisustvo-po-casu.service';

describe('PrisustvoPoCasuService', () => {
  let service: PrisustvoPoCasuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrisustvoPoCasuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
