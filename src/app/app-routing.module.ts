import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcOrderComponent } from './calc-order/components/calc-order.component';

const routes: Routes = [
  { path: 'calc-orders', component: CalcOrderComponent },
  { path: '',   redirectTo: '/calc-orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
