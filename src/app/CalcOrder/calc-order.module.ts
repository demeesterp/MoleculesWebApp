import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcOrderComponent } from './Component/calc-order.component';

@NgModule({
  declarations: [CalcOrderComponent],
  imports: [CommonModule],
  exports: [CalcOrderComponent]
})
export class CalcOrderModule { }
