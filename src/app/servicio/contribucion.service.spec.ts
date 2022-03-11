import { TestBed } from '@angular/core/testing';

import { ContribucionService } from './contribucion.service';

describe('ContribucionService', () => {
  let service: ContribucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContribucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
