import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoEjecucionComponent } from './tiempo-ejecucion.component';

describe('TiempoEjecucionComponent', () => {
  let component: TiempoEjecucionComponent;
  let fixture: ComponentFixture<TiempoEjecucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempoEjecucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
