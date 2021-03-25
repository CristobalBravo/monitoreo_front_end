import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControllerMemoryComponent } from './controller-memory.component';

describe('ControllerMemoryComponent', () => {
  let component: ControllerMemoryComponent;
  let fixture: ComponentFixture<ControllerMemoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
