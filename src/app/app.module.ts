import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalcOrderBookModule } from './calc-order-book/calc-order-book.module';
import { AppHeaderComponent } from './app-header/components/app-header/app-header.component';
import { SharedModule } from './shared/shared.module';
import { MoleculesAnalyserModule } from './molecules-analyser/molecules-analyser.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CalcOrderBookModule,
    MoleculesAnalyserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
