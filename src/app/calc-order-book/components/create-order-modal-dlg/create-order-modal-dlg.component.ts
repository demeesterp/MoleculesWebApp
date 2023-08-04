import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { CalcOrderViewModel } from '../../view-models/calc-order-view-model';

@Component({
  selector: 'app-create-order-modal-dlg',
  templateUrl: './create-order-modal-dlg.component.html'
})
export class CreateOrderModalDlgComponent implements OnInit {

  public formValidated!:boolean;

  public orderNameFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*$')]);

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.formValidated = false;
  }

  OnClickClose() {
    this.activeModal.dismiss();
  }

  OnClickSave() {
    if (this.ValidateForm()) { 
      let result = new CalcOrderViewModel();
      result.Details.Name = this.orderNameFormControl.value??"";
      this.activeModal.close(result);
    }
  }

  private ValidateForm() : boolean {
    this.formValidated = true;
    return this.orderNameFormControl.status === 'VALID';
  }
    

}
