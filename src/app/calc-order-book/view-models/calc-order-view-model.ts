import { ICalcOrder } from "../contracts/calc-order";
import { CalcOrderDetailsViewModel } from "./calc-order-details-view-model";
import { CalcOrderItemViewModel } from "./calc-order-item-view-model";

export class CalcOrderViewModel {
    public Id:number                            = 0;
    public Details:CalcOrderDetailsViewModel    = new CalcOrderDetailsViewModel();
    public Items:CalcOrderItemViewModel[]       = [];

    public static fromCalcOrder(calcOrder: ICalcOrder | null) : CalcOrderViewModel | null {        
        if ( calcOrder === null) {
            return null;
        }
        else {
            let retval = new CalcOrderViewModel();
            retval.Id = calcOrder.Id;
            retval.Details = CalcOrderDetailsViewModel.fromCalcOrderDetails(calcOrder.Details);          
            calcOrder.Items.forEach( item => {
                let result =  CalcOrderItemViewModel.fromCalcOrderItem(item);
                if (result) {
                    retval.Items.push(result)
                }
            });
            return retval;
        }
    }

}