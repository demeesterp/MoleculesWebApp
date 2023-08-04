import { ICalcMolecule } from "../contracts/icalc-molecule";

export class CalcMoleculeViewModel {

    public Id:number = 0;
    public OrderName:string = '';
    public BasisSet:string='';
    public MoleculeName:string='';

    public static fromCalcMolecule(calcMolecule:ICalcMolecule):CalcMoleculeViewModel{
        let retval = new CalcMoleculeViewModel();
        retval.Id = calcMolecule.Id;
        retval.MoleculeName = calcMolecule.MoleculeName;
        retval.OrderName = calcMolecule.OrderName;
        retval.BasisSet = calcMolecule.BasisSet;
        return retval;
    }

}