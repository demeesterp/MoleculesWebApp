import { Injectable } from '@angular/core';
import { CalcOrderRepoService } from './calc-order-repo.service';
import { CalcOrderViewModel } from '../view-models/calc-order-view-model';
import { EMPTY, catchError, finalize, firstValueFrom, map, tap } from 'rxjs';
import { ICalcOrder } from '../contracts/icalc-order';
import { MolHttpClientErrorService } from 'src/app/shared/services/mol-http-client-error.service';
import { CalcOrderItemViewModel } from '../view-models/calc-order-item-view-model';

@Injectable({
  providedIn: 'root'
})
export class CalcOrderBookService {

  public CalculationOrders: CalcOrderViewModel[] = [];

  constructor(private repo: CalcOrderRepoService,
                private errorService:MolHttpClientErrorService) { }

  public GetCalculationOrders(): Promise<CalcOrderViewModel[]> {
    return firstValueFrom(this.repo.getCalcOrderList()
      .pipe(catchError((err) => {
          this.errorService.HandleAnyError(err);
          return [];
      }),
      map((calcOrders) => this.mapCalcOrderList(calcOrders)),
      tap((calcOrderVms) => this.handleCalcOrderList([...calcOrderVms]))));
  }


  public CreateCalculationOrder(calcOrder: CalcOrderViewModel): Promise<CalcOrderViewModel | null> {
    return firstValueFrom(this.repo.createCalcOrder(calcOrder.Details.Name, calcOrder.Details.Description)
      .pipe(catchError((err) => {
            this.errorService.HandleAnyError(err);
            return EMPTY;
      }),
      map((calcOrder) => CalcOrderViewModel.fromCalcOrder(calcOrder)),
      tap((calcOrderVm) => {
        if ( calcOrderVm ) {
          this.handleCalcOrderList([...this.CalculationOrders, calcOrderVm]);
        } else {
          this.handleCalcOrderList([...this.CalculationOrders]);
        }
      }) )
      );
  }

  public UpdateCalculationOrder(id:number, name: string, description:string) {
    return firstValueFrom(this.repo.updateCalcOrder(id, name, description)
      .pipe(catchError((err) => {
            this.errorService.HandleAnyError(err);
            return EMPTY;
      }),
      map((calcOrder) => CalcOrderViewModel.fromCalcOrder(calcOrder)),
      tap((calcOrderVm) => {
        if (calcOrderVm) {
          this.handleCalcOrderList([...this.CalculationOrders.filter(order => order.Id !== id), calcOrderVm]);
        } else {
          this.handleCalcOrderList([...this.CalculationOrders]);
        }       
      })));
   }

   public DeleteCalculationOrder(id:number) {
      return firstValueFrom(this.repo.deleteCalcOrder(id)
              .pipe(catchError((err) => {
                this.errorService.HandleAnyError(err);
                return EMPTY;
                }),
                finalize(() => {
                    this.CalculationOrders = [...this.CalculationOrders.filter(i => i.Id !== id)]
                })));
   }

  public CreateCalculationOrderItem(calcOrderId: number, calcOrderItem: CalcOrderItemViewModel): Promise<CalcOrderItemViewModel | null> {
    return firstValueFrom( this.repo.createCalcOrderItem(calcOrderId, {
          MoleculeName : calcOrderItem.MoleculeName,
          Details : {
            Charge : calcOrderItem.Details.Charge,
            Type : calcOrderItem.Details.Type,
            BasisSetCode : calcOrderItem.Details.BasisSet.Code,
            Xyz : calcOrderItem.Details.Xyz
          }
      })
      .pipe(catchError((err) => {
          this.errorService.HandleAnyError(err);
          return EMPTY;
      }),
      map((calcOrderItem) => CalcOrderItemViewModel.fromCalcOrderItem(calcOrderItem)),
      tap((calcOrderItemVm) => {      
        let currentOrder = this.CalculationOrders.find(order => order.Id === calcOrderId);
        if (currentOrder && calcOrderItemVm) {
          currentOrder.Items = this.handleCalcOrderItemList([calcOrderItemVm, ... currentOrder.Items]);
          this.handleCalcOrderList([...this.CalculationOrders.filter(order => order.Id !== calcOrderId), currentOrder]);
        }
      })
      ));
  }
  
  
  public DeleteOrderItem(calcOrderId:number,calcOrderItemId:number): Promise<void|null> {
    return firstValueFrom(this.repo.deleteCalcOrderItem(calcOrderItemId)
          .pipe(catchError((err) => {
              this.errorService.HandleAnyError(err);
              return EMPTY;
            }),
            finalize(() => {
              let currentOrder = this.CalculationOrders.find(order => order.Id === calcOrderId);
              if (currentOrder) {
                currentOrder.Items = this.handleCalcOrderItemList([... currentOrder.Items.filter(item => item.Id !== calcOrderItemId)]);
              }
            })));
  }
  
  private mapCalcOrder(data:ICalcOrder): CalcOrderViewModel | null {
    return CalcOrderViewModel.fromCalcOrder(data);
  }
  
  private mapCalcOrderList(data: ICalcOrder[] | null): CalcOrderViewModel[] {
    if (data && data.length > 0) {
      return data.map((item) => this.mapCalcOrder(item)) as CalcOrderViewModel[];
    } else {
      return [];
    }
  }

  private handleCalcOrderList(data: CalcOrderViewModel[] | null): void {
    if (data) {
      this.CalculationOrders = data.sort((a, b) => a.Details.Name.localeCompare(b.Details.Name));
    } else {
      this.CalculationOrders = [];
    }
  }

  private handleCalcOrderItemList(data: CalcOrderItemViewModel[]): CalcOrderItemViewModel[]  {
      return data.sort((lhs, rhs) => lhs.Id - rhs.Id)
  }
}
