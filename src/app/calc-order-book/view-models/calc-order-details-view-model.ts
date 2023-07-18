class CalcOrderDetailsViewModel {
   
   public Name:string = "";
   public Description:string = "";

   public static fromCalcOrderDetails(calcOrderDetails:ICalcOrderDetails):CalcOrderDetailsViewModel 
   {
        let retval          = new CalcOrderDetailsViewModel();
        retval.Name         = calcOrderDetails.Name;
        retval.Description  = calcOrderDetails.Description;
        return retval;
   }

}