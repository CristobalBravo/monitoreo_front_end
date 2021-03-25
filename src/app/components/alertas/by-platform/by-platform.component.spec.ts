import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPlatformComponent } from './by-platform.component';

describe('ByPlatformComponent', () => {
  let component: ByPlatformComponent;
  let fixture: ComponentFixture<ByPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
