import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MolHttpClientErrorService {

  private _error:Subject<MoleculesError>                  = new Subject<MoleculesError>();
  private _validationErrors:Subject<ValidationErrorInfo>  = new Subject<ValidationErrorInfo>();

  public PublishError(error: MoleculesError) {
    this._error.next(error);
  }

  public PublishValidationError(error: ValidationErrorInfo) {
    this._validationErrors.next(error);
  }

  public SubscribeOnError(callback: (arg1: MoleculesError) => void): void {
    this._error.subscribe((error) => callback(error) );
  }

  public SubscribeOnValidationError(callback: (arg1: ValidationErrorInfo) => void): void {
   this._validationErrors.subscribe((error) => callback(error) );
  }

}
