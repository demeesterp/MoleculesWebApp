import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MolHttpClientService {

  constructor(private client:HttpClient)  { }

 public get<Type>(url:string): Observable<Type | null> {
    return this.client.get<Type>(url, {
      observe: 'response',
      responseType: 'json'
    }).pipe(
         catchError((error: HttpErrorResponse) => {
          this.HandleError(error, MoleculesHttpMethod.GET);
          return EMPTY;
         }),
         map((response: HttpResponse<Type>) => response.body)
    );
 }

 public delete(url:string): Observable<void|null> {
  return this.client.delete<void>(url, {
          observe: 'response',
          responseType: 'json'
        }).pipe(
       catchError((error: HttpErrorResponse) => {
        this.HandleError(error, MoleculesHttpMethod.DELETE);
        return EMPTY;
       }),
       map((response: HttpResponse<void>) => response.body)
      );
  }


 private HandleError(error:HttpErrorResponse, method:MoleculesHttpMethod):any {
      if ( error.status === 0 ) {
        // case 0:server is down
        throw new ServerDownError(method, error.url??"");
        //throw new MoleculesError(method, error.url??"" , error.error);
      } else if ( error.status === 422) {
        // case 422:validation error
        throw new ServerValidationError(error.url??"" ,method,  error.error);
      }         
      // case all other errors
      throw new ServerError(method, error.url??"" , error.error);
 }

}
