import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcOrderBookComponent } from './components/calc-order-book.component';

@NgModule({
  declarations: [CalcOrderBookComponent],
  imports: [CommonModule],
  exports: [CalcOrderBookComponent]
})
export class CalcOrderBookModule { }
