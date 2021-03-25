import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaUsadaComponent } from './memoria-usada.component';

describe('MemoriaUsadaComponent', () => {
  let component: MemoriaUsadaComponent;
  let fixture: ComponentFixture<MemoriaUsadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriaUsadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaUsadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
