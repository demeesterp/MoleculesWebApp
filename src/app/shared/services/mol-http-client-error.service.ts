import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConnectionError } from '../entities/connection-error';
import { ServerError } from '../entities/server-error';
import { ServerValidationError } from '../entities/server-validation-error';

@Injectable({
  providedIn: 'root'
})
export class MolHttpClientErrorService {

  private _error:Subject<ServerError>                       = new Subject<ServerError>();
  private _validationErrors:Subject<ServerValidationError>  = new Subject<ServerValidationError>();
  private _connectionError:Subject<ConnectionError>         = new Subject<ConnectionError>();

  
  public HandleAnyError(error: any): void {
    if (error instanceof ConnectionError) {
      this.PublishConnectionError(error);
    } else if (error instanceof ServerValidationError) {
      this.PublishValidationError(error);
    }  else if (error instanceof ServerError) {
      this.PublishError(error);
    }
  }
  
  public PublishError(error: ServerError) {
    this._error.next(error);
  }

  public PublishConnectionError(error: ConnectionError) {
    this._connectionError.next(error);
  }

  public PublishValidationError(error: ServerValidationError) {
    this._validationErrors.next(error);
  }

  public SubscribeOnError(callback: (arg1: ServerError) => void): void {
    this._error.subscribe((error) => callback(error) );
  }

  public SubscribeOnConnectionError(callback: (arg1: ConnectionError) => void): void {
    this._connectionError.subscribe((error) => callback(error) );
  }

  public SubscribeOnValidationError(callback: (arg1: ServerValidationError) => void): void {
   this._validationErrors.subscribe((error) => callback(error) );
  }

}
