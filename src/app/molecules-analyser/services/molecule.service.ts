import { Injectable } from '@angular/core';
import { MoleculeRepoService } from './molecule-repo.service';
import { MolHttpClientErrorService } from 'src/app/shared/services/mol-http-client-error.service';
import { CalcMoleculeViewModel } from '../view-models/CalcMoleculeViewModel';
import { catchError, firstValueFrom, map, tap } from 'rxjs';
import { ICalcMolecule } from '../contracts/icalc-molecule';

@Injectable({
  providedIn: 'root'
})
export class MoleculeService {

  public calcMolecules:CalcMoleculeViewModel[] = [];

  constructor(private repo: MoleculeRepoService,
                private errorService:MolHttpClientErrorService) { }

   public GetCalcMoleculesForName(name:string) : Promise<CalcMoleculeViewModel[]> {
    return firstValueFrom(this.repo.FindByName(name).pipe(
        catchError((err) => {
          this.errorService.HandleAnyError(err);
          return [];
        }),
        map(calcMolecules => this.mapCalcMoleculeList(calcMolecules)),
        tap(calcMoleculeVms => {
           this.calcMolecules = [...calcMoleculeVms]
        })
      ));
   }



  private mapCalcMolecule(data:ICalcMolecule): CalcMoleculeViewModel | null {
    return CalcMoleculeViewModel.fromCalcMolecule(data);
  }
  
  private mapCalcMoleculeList(data: ICalcMolecule[] | null): CalcMoleculeViewModel[] {
    if (data && data.length > 0) {
      return data.map((item) => this.mapCalcMolecule(item)) as CalcMoleculeViewModel[];
    } else {
      return [];
    }
  }
  
}
