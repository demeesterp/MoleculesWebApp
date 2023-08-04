import { ICalcDetails } from "./icalc-details";

export interface ICalcOrderItem {
    Id:number;
    MoleculeName:string;
    Details:ICalcDetails;
}