import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfiguracionSugerenciasComponent } from './configuracion-sugerencias.component';

describe('ConfiguracionSugerenciasComponent', () => {
  let component: ConfiguracionSugerenciasComponent;
  let fixture: ComponentFixture<ConfiguracionSugerenciasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionSugerenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
