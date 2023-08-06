import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcOrderBookComponent } from './calc-order-book/components/calc-order-book.component';
import { MoleculesOverviewComponent } from './molecules-analyser/components/molecules-overview/molecules-overview.component';

const routes: Routes = [
  { path: 'calc-order-book', component: CalcOrderBookComponent },
  { path: 'molecules-overview', component:MoleculesOverviewComponent},
  { path: '',   redirectTo: '/calc-order-book', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
