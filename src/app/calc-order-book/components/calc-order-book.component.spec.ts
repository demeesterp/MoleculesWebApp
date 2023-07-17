import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcOrderComponent } from './calc-order-book.component';

describe('CalcOrderComponent', () => {
  let component: CalcOrderComponent;
  let fixture: ComponentFixture<CalcOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcOrderComponent]
    });
    fixture = TestBed.createComponent(CalcOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
