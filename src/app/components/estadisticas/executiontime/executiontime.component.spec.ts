import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExecutiontimeComponent } from './executiontime.component';

describe('ExecutiontimeComponent', () => {
  let component: ExecutiontimeComponent;
  let fixture: ComponentFixture<ExecutiontimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiontimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiontimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
