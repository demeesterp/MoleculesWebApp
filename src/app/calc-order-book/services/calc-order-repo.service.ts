import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MolHttpClientService } from 'src/app/shared/services/mol-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CalcOrderRepoService {

  constructor(private httpClient:MolHttpClientService) { }


  public getCalcOrderList(): Observable<ICalcOrder[] | null> {    
    return this.httpClient.get<ICalcOrder[]>('calcorders');
  }

  public getCalcOrder(id:number): Observable<ICalcOrder | null> {
    return this.httpClient.get<ICalcOrder>(`calcorders/${id}`);
  }

  public deleteCalcOrder(id:number): Observable<void | null> {
    return this.httpClient.delete(`calcorders/${id}`);
  }

  public createCalcOrder(name:string, description:string): Observable<ICalcOrder | null> {
    return this.httpClient.post<ICalcOrder>('calcorders', {name, description});
  }

  public updateCalcOrder(id:number, name:string, description:string): Observable<ICalcOrder | null> {
    return this.httpClient.put<ICalcOrder>(`calcorders/${id}`, {name, description});
  }

  public createCalcOrderItem(calcOrderId:number, itemdetails: ICreateCalcOrderItem): Observable<ICalcOrderItem | null> {
    return this.httpClient.post<ICalcOrderItem>(`calcorders/${calcOrderId}/calcorderitem`, itemdetails);
  }

  public deleteCalcOrderItem(calcOrderItemId:number): Observable<void | null> {
    return this.httpClient.delete(`calcorders/calcorderitem/${calcOrderItemId}`);
  }


}