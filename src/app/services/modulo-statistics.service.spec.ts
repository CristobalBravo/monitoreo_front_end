import { TestBed } from '@angular/core/testing';

import { ModuloStatisticsService } from './modulo-statistics.service';

describe('ModuloStatisticsService', () => {
  let service: ModuloStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuloStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
