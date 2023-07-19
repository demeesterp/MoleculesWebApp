import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-order-modal-dlg',
  templateUrl: './create-order-modal-dlg.component.html'
})
export class CreateOrderModalDlgComponent implements OnInit {

  @Input() public formValidated!:boolean;

  public orderName = new FormControl('');

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.formValidated = false;
  }

  OnClickClose() {
    this.activeModal.dismiss();
  }

  OnClickSave() {
    if (!this.ValidateForm()) { 
      this.formValidated = true;}
    else {
      this.activeModal.close(this.orderName.value);
    }
  }

  private ValidateForm() : boolean {
    if (this.orderName.value == null 
        || this.orderName.value == ''
        || this.orderName.value.length > 250) {
      return false;
    }
    return true;
  }
    

}
