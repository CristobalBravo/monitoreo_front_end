import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VersionStatisticsByBrowserComponent } from './version-statistics-by-browser.component';

describe('VersionStatisticsByBrowserComponent', () => {
  let component: VersionStatisticsByBrowserComponent;
  let fixture: ComponentFixture<VersionStatisticsByBrowserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionStatisticsByBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionStatisticsByBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
