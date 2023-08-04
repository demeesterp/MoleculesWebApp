import { ICalcOrderDetails } from "./icalc-order-details";
import { ICalcOrderItem } from "./icalc-order-item";

export interface ICalcOrder {        
    Id:number;
    Details:ICalcOrderDetails;
    Items:ICalcOrderItem[];
}