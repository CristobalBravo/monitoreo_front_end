import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExecutionTimeUriComponent } from './execution-time-uri.component';

describe('ExecutionTimeUriComponent', () => {
  let component: ExecutionTimeUriComponent;
  let fixture: ComponentFixture<ExecutionTimeUriComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionTimeUriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionTimeUriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
