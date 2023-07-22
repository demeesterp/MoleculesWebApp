import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalcOrderViewModel } from '../../view-models/calc-order-view-model';

@Component({
  selector: 'app-update-order-modal-dlg',
  templateUrl: './update-order-modal-dlg.component.html'
})
export class UpdateOrderModalDlgComponent {

  public formValidated:boolean = false;

  public orderNameFormCtrl!: FormControl;


  public get OrderName():string {
      return this.orderNameFormCtrl.value;
  }

  public set OrderName(input:string){
    this.orderNameFormCtrl.setValue(input);
  }

  constructor(public activeModal: NgbActiveModal) { 
    this.orderNameFormCtrl = new FormControl('', Validators.required);
  }  
  
  public OnClickClose() {
    this.activeModal.dismiss();
  }

  public OnClickSave() {
    if (this.ValidateForm()) { 
      let result = new CalcOrderViewModel();
      result.Details.Name = this.orderNameFormCtrl.value??"";
      this.activeModal.close(result);
    }

  }

  private ValidateForm() : boolean {
    this.formValidated = false;
    return this.orderNameFormCtrl.status == 'VALID';
  }

}
