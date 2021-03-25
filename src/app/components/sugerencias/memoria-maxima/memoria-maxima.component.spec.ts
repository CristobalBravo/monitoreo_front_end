import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaMaximaComponent } from './memoria-maxima.component';

describe('MemoriaMaximaComponent', () => {
  let component: MemoriaMaximaComponent;
  let fixture: ComponentFixture<MemoriaMaximaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriaMaximaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaMaximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
