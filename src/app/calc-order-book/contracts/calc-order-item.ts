import { ICalcDetails } from "./calc-details";

export interface ICalcOrderItem {
    Id:number;
    MoleculeName:string;
    CalcDetails:ICalcDetails;
}