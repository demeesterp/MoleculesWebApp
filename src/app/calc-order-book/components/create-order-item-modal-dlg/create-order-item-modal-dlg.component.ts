import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalcBasisSet } from '../../entities/basisset/calc-basisset';
import { BasisSetService } from '../../entities/basisset/all-calc-basissets';
import { CalcBasisSetCode } from '../../entities/basisset/calc-basisset-code';
import { CalcOrderItemViewModel } from '../../view-models/calc-order-item-view-model';
import { CalcDetailsViewModel } from '../../view-models/calc-details-view-model';

@Component({
  selector: 'app-create-order-item-modal-dlg',
  templateUrl: './create-order-item-modal-dlg.component.html'
})
export class CreateOrderItemModalDlgComponent implements OnInit {

   public formValidated: boolean = false;

   private  xyzContent: string = "";

   public orderItemForm: FormGroup = new FormGroup({
              moleculeName: new FormControl('', [Validators.required, Validators.maxLength(250)]),
              moleculeCharge: new FormControl('0',[Validators.required]),
              calcType: new FormControl('GeoOpt'  , [Validators.required]),
              basisSet: new FormControl(CalcBasisSetCode.BSTO3G  , [Validators.required]),
              xyzData: new FormControl('', [Validators.required]),
  });

  public CalcBasisSets:CalcBasisSet[]  = BasisSetService.GetCalcBasisSets();

  constructor(public activeModal: NgbActiveModal, private cd: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    this.formValidated = false;
   }

   public OnClickClose():void {
    this.activeModal.dismiss();
   }

   public OnClickSave():void {
    if ( this.ValidateForm() ) {
      let retval = new CalcOrderItemViewModel();
      retval.MoleculeName = this.orderItemForm.value.moleculeName;
      retval.Details = CalcDetailsViewModel.fromCalcDetails({
              Type: this.orderItemForm.value.calcType,
              BasisSetCode: this.orderItemForm.value.basisSet,
              Charge: this.orderItemForm.value.moleculeCharge,
              Xyz: this.xyzContent
      });
      this.activeModal.close(retval);
    }
   }

   public onFileChange(event: any): void {
      if ( event.target?.files 
            && event.target.files.length > 0 ) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          this.xyzContent = reader.result as string;
          this.cd.markForCheck();
        };
      }
   }

   private ValidateForm() : boolean {
    this.formValidated = true;
    return this.orderItemForm.status === 'VALID';
  }

}
