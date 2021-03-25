import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExecutionTimeMethodComponent } from './execution-time-method.component';

describe('ExecutionTimeMethodComponent', () => {
  let component: ExecutionTimeMethodComponent;
  let fixture: ComponentFixture<ExecutionTimeMethodComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionTimeMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionTimeMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
