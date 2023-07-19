import { ICalcOrderDetails } from "./calc-order-details";
import { ICalcOrderItem } from "./calc-order-item";

export interface ICalcOrder {        
    Id:number;
    Details:ICalcOrderDetails;
    Items:ICalcOrderItem[];
}