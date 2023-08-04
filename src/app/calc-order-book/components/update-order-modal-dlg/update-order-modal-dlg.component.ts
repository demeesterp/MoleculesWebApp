import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalcOrderViewModel } from '../../view-models/calc-order-view-model';
import { NgbTimeStructAdapter } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-adapter';

@Component({
  selector: 'app-update-order-modal-dlg',
  templateUrl: './update-order-modal-dlg.component.html'
})
export class UpdateOrderModalDlgComponent {

  public formValidated:boolean = false;

  // Validators.pattern('[a-zA-Z]*$')

  public orderNameFormCtrl: FormControl =  new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*$')]);


  public get OrderName():string {
      return this.orderNameFormCtrl.value??"";
  }

  public set OrderName(input:string){
    this.orderNameFormCtrl.setValue(input);
  }

  constructor(public activeModal: NgbActiveModal) { 
  }  
  
  public OnClickClose() {
    this.activeModal.dismiss();
  }

  public OnClickSave() {
    if (this.ValidateForm()) { 
      let result = new CalcOrderViewModel();
      result.Details.Name = this.OrderName;
      this.activeModal.close(result);
    }
  }

  private ValidateForm() : boolean {
    this.formValidated = true;
    return this.orderNameFormCtrl.status === 'VALID';
  }

}
