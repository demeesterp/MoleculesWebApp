class CalcOrderItemViewModel {    
    public Id:number = 0;
    public MoleculeName:string = ""
    public CalcDetails:CalcDetailsViewModel = new CalcDetailsViewModel();

    public static fromCalcOrderItem(calcOrderItem:ICalcOrderItem):CalcOrderItemViewModel {
        let retval = new CalcOrderItemViewModel();
        retval.Id = calcOrderItem.Id;
        retval.MoleculeName = calcOrderItem.MoleculeName;
        retval.CalcDetails = CalcDetailsViewModel.fromCalcDetails(calcOrderItem.CalcDetails);
        return retval;
    }

}