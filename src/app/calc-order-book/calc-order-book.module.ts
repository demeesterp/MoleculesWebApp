import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcOrderBookComponent } from './components/calc-order-book.component';
import { CreateOrderModalDlgComponent } from './components/create-order-modal-dlg/create-order-modal-dlg.component';
import { CreateOrderItemModalDlgComponent } from './components/create-order-item-modal-dlg/create-order-item-modal-dlg.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateOrderModalDlgComponent } from './components/update-order-modal-dlg/update-order-modal-dlg.component';

@NgModule({
  declarations: [CalcOrderBookComponent, CreateOrderModalDlgComponent, CreateOrderItemModalDlgComponent, UpdateOrderModalDlgComponent],
  imports: [CommonModule, SharedModule],
  exports: [CalcOrderBookComponent, CreateOrderModalDlgComponent, CreateOrderItemModalDlgComponent]
})
export class CalcOrderBookModule { }
