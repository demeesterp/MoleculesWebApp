import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcOrderBookComponent } from './calc-order-book/components/calc-order-book.component';

const routes: Routes = [
  { path: 'calc-order-book', component: CalcOrderBookComponent },
  { path: '',   redirectTo: '/calc-order-book', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
