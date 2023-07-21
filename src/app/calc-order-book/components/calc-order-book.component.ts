import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOrderModalDlgComponent } from './create-order-modal-dlg/create-order-modal-dlg.component';
import { CreateOrderItemModalDlgComponent } from './create-order-item-modal-dlg/create-order-item-modal-dlg.component';

@Component({
  selector: 'app-calc-order',
  templateUrl: './calc-order-book.component.html'
})
export class CalcOrderBookComponent implements OnInit{

  //private _currentOrder!: CalcOrderViewModel ;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    //this._currentOrder = new CalcOrderViewModel();
  }

  public OnClickNewOrder() {
    const modalRef = this.modalService.open(CreateOrderModalDlgComponent);
		modalRef.componentInstance.name = 'CreateOrderModalDlgComponent';
    modalRef.result.then((result) => {
      alert(`Closed with: ${JSON.stringify(result)}`);
    });
  }

  public OnClickNewOrderItem() {
    const modalRef = this.modalService.open(CreateOrderItemModalDlgComponent);
		modalRef.componentInstance.name = 'CreateOrderItemModalDlgComponent';
    modalRef.result.then((result) => {
      alert(`Closed with: ${JSON.stringify(result)}`);
    });
  }

}
