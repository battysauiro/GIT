import { TestBed } from '@angular/core/testing';

import { TipoContribucionService } from './tipo-contribucion.service';

describe('TipoContribucionService', () => {
  let service: TipoContribucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContribucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
