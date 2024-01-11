import { TestBed } from '@angular/core/testing';

import { DatanigeriaService } from './datanigeria.service';

describe('DatanigeriaService', () => {
  let service: DatanigeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatanigeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
