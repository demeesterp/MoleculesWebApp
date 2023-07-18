import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderModalDlgComponent } from './create-order-modal-dlg.component';

describe('CreateOrderModalDlgComponent', () => {
  let component: CreateOrderModalDlgComponent;
  let fixture: ComponentFixture<CreateOrderModalDlgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrderModalDlgComponent]
    });
    fixture = TestBed.createComponent(CreateOrderModalDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
