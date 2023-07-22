import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ConnectionError } from '../entities/error/connection-error';
import { ServerValidationError } from '../entities/error/server-validation-error';
import { ServerError } from '../entities/error/server-error';
import { MoleculesHttpMethod } from '../entities/molecules-http-method';

@Injectable({
  providedIn: 'root'
})
export class MolHttpClientService {

  constructor(private client:HttpClient)  { }

 public get<Type>(url:string): Observable<Type | null> {
    return this.client.get<Type>(this.ComposeUrl(url), {
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
  return this.client.delete<void>(this.ComposeUrl(url), {
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

  public post<Type>(url:string, body:any): Observable<Type|null> {
    return this.client.post<Type>(this.ComposeUrl(url), body, {
                observe: 'response',
                responseType: 'json'
            }).pipe(catchError((error: HttpErrorResponse) => {
                this.HandleError(error, MoleculesHttpMethod.POST);
                return EMPTY;
            }),
            map((response: HttpResponse<Type>) => response.body)
            );
  }

  public put<Type>(url:string, body:any): Observable<Type|null> {
    return this.client.put<Type>(this.ComposeUrl(url), body, {
                observe: 'response',
                responseType: 'json'
            }).pipe(catchError((error: HttpErrorResponse) => {
                this.HandleError(error, MoleculesHttpMethod.PUT);
                return EMPTY;
            }),
            map((response: HttpResponse<Type>) => response.body));
  }
  
  public patch<Type>(url:string, body:any): Observable<Type|null> {
    return this.client.patch<Type>(this.ComposeUrl(url), body, {
                observe: 'response',
                responseType: 'json'
            }).pipe(catchError((error: HttpErrorResponse) => {
                this.HandleError(error, MoleculesHttpMethod.Patch);
                return EMPTY;
            }),
            map((response: HttpResponse<Type>) => response.body));
  }


 private HandleError(error:HttpErrorResponse, method:MoleculesHttpMethod):void {
      if ( error.status === 0 ) {
        // case 0:server is down
        throw new ConnectionError(method, error.url??"");
        //throw new MoleculesError(method, error.url??"" , error.error);
      } else if ( error.status === 422) {
        // case 422:validation error
        throw new ServerValidationError(error.url??"" ,method,  error.error);
      }         
      // case all other errors
      throw new ServerError(method, error.url??"" , error.error);
 }

 private ComposeUrl(url:string):string {
    return `${environment.apiEndpoint}${url}`;
 }

}
