import { Component, OnInit } from '@angular/core';
import { MoleculeService } from '../../services/molecule.service';
import { CalcMoleculeViewModel } from '../../view-models/CalcMoleculeViewModel';
import { MolHttpClientErrorService } from 'src/app/shared/services/mol-http-client-error.service';

@Component({
  selector: 'app-molecules-overview',
  templateUrl: './molecules-overview.component.html'
})
export class MoleculesOverviewComponent implements OnInit {

  public get Molecules():CalcMoleculeViewModel[] {
    return this.moleculesService.calcMolecules;
  }
  
  public constructor(private moleculesService:MoleculeService,
                       private errorService:MolHttpClientErrorService) {
  }
  
  ngOnInit(): void {
    this.errorService.SubscribeOnConnectionError((error) => this.displayError("No connection", error));
    this.errorService.SubscribeOnValidationError((error) => this.displayError("Vaidation error", error));
    this.errorService.SubscribeOnError((error) => this.displayError("Server error", error));
  }

  OnClickSearch(searchName:string) {
    if (searchName) {
      this.moleculesService.GetCalcMoleculesForName(searchName)
      .then();
    }
  }

  private displayError(msg: string, error: any): void {
    alert(JSON.stringify(error));
  }

}
