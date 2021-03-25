import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopsTypeModuloComponent } from './tops-type-modulo.component';

describe('TopsTypeModuloComponent', () => {
  let component: TopsTypeModuloComponent;
  let fixture: ComponentFixture<TopsTypeModuloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsTypeModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsTypeModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
