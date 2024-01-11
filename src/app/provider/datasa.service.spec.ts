import { TestBed } from '@angular/core/testing';

import { DatasaService } from './datasa.service';

describe('DatasaService', () => {
  let service: DatasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
