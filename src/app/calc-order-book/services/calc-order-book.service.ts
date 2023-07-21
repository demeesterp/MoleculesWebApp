import { Injectable } from '@angular/core';
import { CalcOrderRepoService } from './calc-order-repo.service';
import { CalcOrderViewModel } from '../view-models/calc-order-view-model';
import { EMPTY, catchError, firstValueFrom, map, tap, throwError } from 'rxjs';
import { ICalcOrder } from '../contracts/calc-order';
import { MolHttpClientErrorService } from 'src/app/shared/services/mol-http-client-error.service';

@Injectable({
  providedIn: 'root'
})
export class CalcOrderBookService {

  public CalculationOrders: CalcOrderViewModel[] = [];

  constructor(private repo: CalcOrderRepoService,
                private errorService:MolHttpClientErrorService) { }

  public async GetCalculationOrders(): Promise<CalcOrderViewModel[]> {
       return firstValueFrom(this.repo.getCalcOrderList()
          .pipe(catchError((err) => {
              this.errorService.HandleAnyError(err);
              return [];
            }),
            map((calcOrders) => this.mapCalcOrderList(calcOrders)),
            tap((calcOrderVms) => this.handleCalcOrderList(calcOrderVms))));
  }


  public async CreateCalculationOrder(calcOrder: CalcOrderViewModel): Promise<CalcOrderViewModel | null> {
       return firstValueFrom(this.repo.createCalcOrder(calcOrder.Details.Name, calcOrder.Details.Description)
        .pipe(catchError((err) => {
            this.errorService.HandleAnyError(err);
            return EMPTY;
        }),
        map((calcOrder) => CalcOrderViewModel.fromCalcOrder(calcOrder)),
        tap((calcOrderVms) =>  {
          if ( calcOrderVms !== null ) {
            this.CalculationOrders = [...this.CalculationOrders, calcOrderVms];
          }
        })));
  } 
  
  
  
  
  private mapCalcOrderList(data: ICalcOrder[] | null): CalcOrderViewModel[] {
    if (data && data.length > 0) {
      return data.sort((a, b) => a.Details.Name.localeCompare(b.Details.Name))
                        .map((item) => CalcOrderViewModel.fromCalcOrder(item)) as CalcOrderViewModel[];
    } else {
      return [];
    }
  }

  private handleCalcOrderList(data: CalcOrderViewModel[]): void {
    if (data.length > 0) {
      this.CalculationOrders = [... data];
    } else {
      this.CalculationOrders = [];
    }
  }
}
