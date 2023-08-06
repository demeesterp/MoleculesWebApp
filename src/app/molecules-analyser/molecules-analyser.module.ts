import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MoleculesOverviewComponent } from './components/molecules-overview/molecules-overview.component';



@NgModule({
  declarations: [
    MoleculesOverviewComponent
  ],
  imports: [
    [CommonModule, SharedModule]
  ],
  exports: [
    MoleculesOverviewComponent
  ]
})
export class MoleculesAnalyserModule { }
