import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCodeAlertsComponent } from './by-code-alerts.component';

describe('ByCodeAlertsComponent', () => {
  let component: ByCodeAlertsComponent;
  let fixture: ComponentFixture<ByCodeAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCodeAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCodeAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
