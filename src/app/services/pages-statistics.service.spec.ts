import { TestBed } from '@angular/core/testing';

import { PagesStatisticsService } from './pages-statistics.service';

describe('PagesStatisticsService', () => {
  let service: PagesStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
