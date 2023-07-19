import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcOrderBookComponent } from './components/calc-order-book.component';
import { CreateOrderModalDlgComponent } from './components/create-order-modal-dlg/create-order-modal-dlg.component';
import { CreateOrderItemModalDlgComponent } from './components/create-order-item-modal-dlg/create-order-item-modal-dlg.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CalcOrderBookComponent, CreateOrderModalDlgComponent, CreateOrderItemModalDlgComponent],
  imports: [CommonModule, SharedModule],
  exports: [CalcOrderBookComponent, CreateOrderModalDlgComponent, CreateOrderItemModalDlgComponent]
})
export class CalcOrderBookModule { }
