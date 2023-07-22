import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderModalDlgComponent } from './update-order-modal-dlg.component';

describe('UpdateOrderModalDlgComponent', () => {
  let component: UpdateOrderModalDlgComponent;
  let fixture: ComponentFixture<UpdateOrderModalDlgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrderModalDlgComponent]
    });
    fixture = TestBed.createComponent(UpdateOrderModalDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
