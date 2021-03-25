import { TestBed } from '@angular/core/testing';

import { NotificacionesServicesService } from './notificaciones-services.service';

describe('NotificacionesServicesService', () => {
  let service: NotificacionesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
