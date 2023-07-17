import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MolHttpClientErrorService {

  private _error:Subject<IMoleculesError> = new Subject<IMoleculesError>();
  private _validationErrors:Subject<IMoleculeValidationErrorList> = new Subject<IMoleculeValidationErrorList>();

  constructor() { }
}
