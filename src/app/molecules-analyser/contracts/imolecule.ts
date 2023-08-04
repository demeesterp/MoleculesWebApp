import { IAtom } from "./iatom";
import { IBond } from "./ibond";
import { IElectronicPotential } from "./ielectronic-potential";

export interface IMolecule {
    Name:string;
    CalcValidityRemarks:string;
    Charge:number|null;
    DftEnergy:number|null;
    HFEnergy:number|null;
    HFEnergyHOMO:number|null;
    HFEnergyLUMO:number|null;
    Atoms:IAtom[]|null;
    Bonds:IBond[]|null;
    ElPot:IElectronicPotential[]|null;
}