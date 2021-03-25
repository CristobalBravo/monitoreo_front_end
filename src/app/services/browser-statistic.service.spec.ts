import { TestBed } from '@angular/core/testing';

import { BrowserStatisticService } from './browser-statistic.service';

describe('BrowserStatisticService', () => {
  let service: BrowserStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
