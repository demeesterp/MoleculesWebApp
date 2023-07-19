export class CalcDetailsViewModel {
    public Charge:number = 0;
    public Xyz:string = "";
    public CalcType:CalcType = CalcType.GeoOpt;
    public BasisSetCode:CalcBasisSetCode = CalcBasisSetCode.BSTO3G;

    public static fromCalcDetails(calcDetails:ICalcDetails):CalcDetailsViewModel {
        let retval = new CalcDetailsViewModel();
        retval.Charge = calcDetails.Charge;
        retval.Xyz = calcDetails.Xyz;
        retval.CalcType = CalcType[calcDetails.CalcType as keyof typeof CalcType];
        retval.BasisSetCode = CalcBasisSetCode[calcDetails.BasisSetCode as keyof typeof CalcBasisSetCode];
        return  retval;
    }

    
}