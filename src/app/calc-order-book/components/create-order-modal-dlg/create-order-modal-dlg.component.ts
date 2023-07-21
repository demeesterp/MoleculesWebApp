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
    if (this.ValidateForm()) { 
      this.activeModal.close({
        id: 0,
        Details: {
          Name: this.orderName.value,
          Description: ''
        },
        Items: []
      });
    }
  }

  private ValidateForm() : boolean {
    this.formValidated = false;
    return this.orderName.status == 'VALID';
  }
    

}
