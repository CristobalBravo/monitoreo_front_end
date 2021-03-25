import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticByBrowserComponent } from './statistic-by-browser.component';

describe('StatisticByBrowserComponent', () => {
  let component: StatisticByBrowserComponent;
  let fixture: ComponentFixture<StatisticByBrowserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticByBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticByBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
