import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethodMemoryComponent } from './method-memory.component';

describe('MethodMemoryComponent', () => {
  let component: MethodMemoryComponent;
  let fixture: ComponentFixture<MethodMemoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
