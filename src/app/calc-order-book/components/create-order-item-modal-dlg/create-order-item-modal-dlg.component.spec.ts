import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderItemModalDlgComponent } from './create-order-item-modal-dlg.component';

describe('CreateOrderItemModalDlgComponent', () => {
  let component: CreateOrderItemModalDlgComponent;
  let fixture: ComponentFixture<CreateOrderItemModalDlgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrderItemModalDlgComponent]
    });
    fixture = TestBed.createComponent(CreateOrderItemModalDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
