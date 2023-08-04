import { ICalcDetails } from "../contracts/icalc-details";
import { BasisSetService } from "../entities/basisset/all-calc-basissets";
import { CalcBasisSet } from "../entities/basisset/calc-basisset";
import { CalcBasisSetCode } from "../entities/basisset/calc-basisset-code";
import { CalcOrderItemType } from "../entities/calc-type";

export class CalcDetailsViewModel {
    public Charge:number = 0;
    public Xyz:string = "";
    public Type:CalcOrderItemType = CalcOrderItemType.AllKinds;
    public BasisSet:CalcBasisSet = BasisSetService.GetCalcBasisSet(CalcBasisSetCode.BSTO3G);

    public static fromCalcDetails(calcDetails:ICalcDetails | null):CalcDetailsViewModel {
        if ( !calcDetails) {
            return new CalcDetailsViewModel();
        } else {
            let retval      = new CalcDetailsViewModel();
            retval.Charge   = calcDetails.Charge;
            retval.Xyz      = calcDetails.Xyz;
            retval.Type = CalcOrderItemType[calcDetails.Type as keyof typeof CalcOrderItemType];
            retval.BasisSet = BasisSetService.GetCalcBasisSet(CalcBasisSetCode[calcDetails.BasisSetCode as keyof typeof CalcBasisSetCode]);   
            return  retval;
        }
    }

    
}