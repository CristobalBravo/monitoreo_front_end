import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticsBySoComponent } from './statistics-by-so.component';

describe('StatisticsBySoComponent', () => {
  let component: StatisticsBySoComponent;
  let fixture: ComponentFixture<StatisticsBySoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsBySoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsBySoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
