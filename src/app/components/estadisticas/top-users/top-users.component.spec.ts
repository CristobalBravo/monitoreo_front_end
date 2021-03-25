import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopUsersComponent } from './top-users.component';

describe('TopUsersComponent', () => {
  let component: TopUsersComponent;
  let fixture: ComponentFixture<TopUsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
