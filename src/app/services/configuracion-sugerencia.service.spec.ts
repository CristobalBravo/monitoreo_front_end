import { TestBed } from '@angular/core/testing';

import { ConfiguracionSugerenciaService } from './configuracion-sugerencia.service';

describe('ConfiguracionSugerenciaService', () => {
  let service: ConfiguracionSugerenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionSugerenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
