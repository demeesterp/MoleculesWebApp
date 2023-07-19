import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-order-item-modal-dlg',
  templateUrl: './create-order-item-modal-dlg.component.html',
  styleUrls: ['./create-order-item-modal-dlg.component.scss']
})
export class CreateOrderItemModalDlgComponent implements OnInit {

   public formValidated: boolean = false;

   public orderItemForm: FormGroup = new FormGroup({
    moleculeName: new FormControl('Test', [Validators.required, Validators.maxLength(250)]),
    moleculeCharge: new FormControl('0',[Validators.required]),
    calcType: new FormControl('GeoOpt'  , [Validators.required])
  });

  constructor(public activeModal: NgbActiveModal) { 
  }

  ngOnInit(): void {
    this.formValidated = false;
  }


   public OnClickClose():void {
    this.activeModal.dismiss();
   }

   public OnClickSave():void {
    if ( this.ValidateForm() ) {
      this.activeModal.close(JSON.stringify(this.orderItemForm.value));
    } else {
      this.formValidated = true;
    }
   }


   private ValidateForm() : boolean {
    //console.error(this.orderItemForm.status);
    console.error(`moleculeName ${this.orderItemForm.get("moleculeName")?.status}`);
    console.error(`moleculeCharge ${this.orderItemForm.get("moleculeCharge")?.status}`);
    console.error(`calcType ${this.orderItemForm.get("calcType")?.status}`);

    return this.orderItemForm.status === 'VALID';
    
  }

}
