import { TestBed } from '@angular/core/testing';

import { ExecutiontimeServices } from './executiontime.service';

describe('ExecutiontimeServicesService', () => {
  let service: ExecutiontimeServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExecutiontimeServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
