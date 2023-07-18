class CalcOrderViewModel {
    public Id:number                            = 0;
    public Details:CalcOrderDetailsViewModel    = new CalcOrderDetailsViewModel();
    public Items:CalcOrderItemViewModel[]       = [];

    public static fromCalcOrder(calcOrder:ICalcOrder):CalcOrderViewModel {
        let retval = new CalcOrderViewModel();
        retval.Id = calcOrder.Id;
        retval.Details = CalcOrderDetailsViewModel.fromCalcOrderDetails(calcOrder.Details);
        retval.Items = calcOrder.Items.map((item) => CalcOrderItemViewModel.fromCalcOrderItem(item));
        return retval;
    }
}