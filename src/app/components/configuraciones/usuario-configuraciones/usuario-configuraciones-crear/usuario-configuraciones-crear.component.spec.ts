import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsuarioConfiguracionesCrearComponent } from './usuario-configuraciones-crear.component';

describe('UsuarioConfiguracionesCrearComponent', () => {
  let component: UsuarioConfiguracionesCrearComponent;
  let fixture: ComponentFixture<UsuarioConfiguracionesCrearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioConfiguracionesCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioConfiguracionesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
