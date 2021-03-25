import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticsByBrowserVersionComponent } from './statistics-by-browser-version.component';

describe('StatisticsByBrowserVersionComponent', () => {
  let component: StatisticsByBrowserVersionComponent;
  let fixture: ComponentFixture<StatisticsByBrowserVersionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsByBrowserVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsByBrowserVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
