class CalcBasisSet {
    public Code:CalcBasisSetCode = CalcBasisSetCode.BSTO3G;
    public Name:string = "";

    public constructor(code:CalcBasisSetCode,name:string){
        this.Code = code;
        this.Name = name;
    }
}