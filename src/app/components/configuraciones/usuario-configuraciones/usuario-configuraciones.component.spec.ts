import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsuarioConfiguracionesComponent } from './usuario-configuraciones.component';

describe('UsuarioConfiguracionesComponent', () => {
  let component: UsuarioConfiguracionesComponent;
  let fixture: ComponentFixture<UsuarioConfiguracionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioConfiguracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioConfiguracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
