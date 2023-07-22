import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateOrderModalDlgComponent } from './create-order-modal-dlg/create-order-modal-dlg.component';
import { CreateOrderItemModalDlgComponent } from './create-order-item-modal-dlg/create-order-item-modal-dlg.component';
import { MolHttpClientErrorService } from 'src/app/shared/services/mol-http-client-error.service';
import { CalcOrderBookService } from '../services/calc-order-book.service';
import { CalcOrderViewModel } from '../view-models/calc-order-view-model';
import { CalcOrderItemViewModel } from '../view-models/calc-order-item-view-model';

@Component({
  selector: 'app-calc-order',
  templateUrl: './calc-order-book.component.html'
})
export class CalcOrderBookComponent implements OnInit{

  public get Orders():CalcOrderViewModel[] {
    return this.calcOrderBookService.CalculationOrders;
  }
  
  public SelectedOrder:CalcOrderViewModel | null = null;
  
  constructor(private calcOrderBookService: CalcOrderBookService,
                private modalService:       NgbModal, 
                  private errorService:     MolHttpClientErrorService) { }

  async ngOnInit() {
      
      this.errorService.SubscribeOnConnectionError((error) => this.displayError("No connection", error));
      this.errorService.SubscribeOnValidationError((error) => this.displayError("Vaidation error", error));
      this.errorService.SubscribeOnError((error) => this.displayError("Server error", error));

      await this.calcOrderBookService.GetCalculationOrders();

      this.SelectedOrder = this.Orders.length > 0 ? this.Orders[0] : null;
  }

  public OnClickNewOrder() {
    const modalRef = this.modalService.open(CreateOrderModalDlgComponent);
		modalRef.componentInstance.name = 'CreateOrderModalDlgComponent';
    modalRef.result.then( (result: CalcOrderViewModel) => 
          this.calcOrderBookService.CreateCalculationOrder(result)
          .then((createdOrder) => {
              this.SelectedOrder = createdOrder;
          })
    );
  }

  public OnClickNewOrderItem() {
    const modalRef = this.modalService.open(CreateOrderItemModalDlgComponent);
		modalRef.componentInstance.name = 'CreateOrderItemModalDlgComponent';
    modalRef.result.then((result: CalcOrderItemViewModel) => {
        if ( this.SelectedOrder ) {
          this.calcOrderBookService.CreateCalculationOrderItem(this.SelectedOrder?.Id,result);
        }
      }
    );
  }

  public OnClickDeleteOrderItem(item: CalcOrderItemViewModel) {
    if( this.SelectedOrder) {
      this.calcOrderBookService.DeleteOrderItem(this.SelectedOrder.Id, item.Id);
    }
  }

  public OnClickOrder(order:CalcOrderViewModel) {
    this.SelectedOrder = order;
  }

  private displayError(msg: string, error: any): void {
    alert(JSON.stringify(error));
  }

}
