import { ICalcDetails } from "../contracts/calc-details";
import { BasisSetService } from "../entities/basisset/all-calc-basissets";
import { CalcBasisSet } from "../entities/basisset/calc-basisset";
import { CalcBasisSetCode } from "../entities/basisset/calc-basisset-code";
import { CalcType } from "../entities/calc-type";

export class CalcDetailsViewModel {
    public Charge:number = 0;
    public Xyz:string = "";
    public CalcType:CalcType = CalcType.GeoOpt;
    public BasisSet:CalcBasisSet = BasisSetService.GetCalcBasisSet(CalcBasisSetCode.BSTO3G);

    public static fromCalcDetails(calcDetails:ICalcDetails | null):CalcDetailsViewModel {
        if ( !calcDetails) {
            return new CalcDetailsViewModel();
        } else {
            let retval      = new CalcDetailsViewModel();
            retval.Charge   = calcDetails.Charge;
            retval.Xyz      = calcDetails.Xyz;
            retval.CalcType = CalcType[calcDetails.CalcType as keyof typeof CalcType];
            retval.BasisSet = BasisSetService.GetCalcBasisSet(CalcBasisSetCode[calcDetails.BasisSetCode as keyof typeof CalcBasisSetCode]);   
            return  retval;
        }
    }

    
}