import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcOrderBookComponent } from './components/calc-order-book.component';
import { CreateOrderModelDlgComponent } from './components/dialogs/create-order-model-dlg/create-order-model-dlg.component';
import { CreateOrderModalDlgComponent } from './components/create-order-modal-dlg/create-order-modal-dlg.component';
import { CreateOrderItemModalDlgComponent } from './components/create-order-item-modal-dlg/create-order-item-modal-dlg.component';

@NgModule({
  declarations: [CalcOrderBookComponent, CreateOrderModelDlgComponent, CreateOrderModalDlgComponent, CreateOrderItemModalDlgComponent],
  imports: [CommonModule],
  exports: [CalcOrderBookComponent]
})
export class CalcOrderBookModule { }
