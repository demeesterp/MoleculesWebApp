import { Injectable } from '@angular/core';
import { MolHttpClientService } from 'src/app/shared/services/mol-http-client.service';
import { ICalcMolecule } from '../contracts/icalc-molecule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoleculeRepoService {

  constructor(private httpClient:MolHttpClientService) { }

  public GetById(id:number): Observable<ICalcMolecule|null> {
    return this.httpClient.get<ICalcMolecule>(`molecule/${id}`);
  }

  public FindByName(name:string): Observable<ICalcMolecule[]|null> {
    return this.httpClient.get<ICalcMolecule[]>(`molecule/name/${name}`);
  }

}
