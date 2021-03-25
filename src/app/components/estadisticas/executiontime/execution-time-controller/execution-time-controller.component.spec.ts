import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExecutionTimeControllerComponent } from './execution-time-controller.component';

describe('ExecutionTimeControllerComponent', () => {
  let component: ExecutionTimeControllerComponent;
  let fixture: ComponentFixture<ExecutionTimeControllerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionTimeControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionTimeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
