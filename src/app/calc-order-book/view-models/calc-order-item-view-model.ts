import { ICalcOrderItem } from "../contracts/icalc-order-item";
import { CalcDetailsViewModel } from "./calc-details-view-model";

export class CalcOrderItemViewModel {    
    public Id:number = 0;
    public MoleculeName:string = ""
    public Details:CalcDetailsViewModel = new CalcDetailsViewModel();

    public static fromCalcOrderItem(calcOrderItem:ICalcOrderItem | null) : CalcOrderItemViewModel | null {
        if ( calcOrderItem === null) {
            return null;
        } else {
            let retval = new CalcOrderItemViewModel();
            retval.Id = calcOrderItem.Id;
            retval.MoleculeName = calcOrderItem.MoleculeName;
            retval.Details = CalcDetailsViewModel.fromCalcDetails(calcOrderItem.Details);
            return retval;
        }
    }

}