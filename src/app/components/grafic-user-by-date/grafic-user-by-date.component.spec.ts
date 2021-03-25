import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraficUSerByDateComponent } from './grafic-user-by-date.component';

describe('GraficUSerByDateComponent', () => {
  let component: GraficUSerByDateComponent;
  let fixture: ComponentFixture<GraficUSerByDateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficUSerByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficUSerByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
