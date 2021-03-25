import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UriMemoryComponent } from './uri-memory.component';

describe('UriMemoryComponent', () => {
  let component: UriMemoryComponent;
  let fixture: ComponentFixture<UriMemoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UriMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UriMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
