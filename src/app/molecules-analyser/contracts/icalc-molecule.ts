import { IMolecule } from "./imolecule";

export interface ICalcMolecule {
    Id:number;
    OrderName:string;
    BasisSet:string;
    MoleculeName:string;
    Molecule:IMolecule|null;
}