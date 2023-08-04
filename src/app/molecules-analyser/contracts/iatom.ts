import { IAtomOrbital } from "./iatom-orbital";
import { IAtomProperties } from "./iatom-properties";
import { IBond } from "./ibond";

export interface IAtom {
    Position:number;
    Number:number;
    Symbol:string;
    AtomicWeight:number;
    Info:IAtomProperties;
    PosX:number|null;
    PosY:number|null;
    PosZ:number|null;
    Radius:number|null;
    MullikenPopulation:number|null;
    MullikenPopulationHOMO:number|null;
    MullikenPopulationLUMO:number|null;
    LowdinPopulation:number|null;
    LowdinPopulationHOMO:number|null;
    LowdinPopulationLUMO:number|null;
    CHelpGCharge:number|null;
    ConnollyCharge:number|null;
    GeoDiscCharge:number|null; 
    Orbitals: IAtomOrbital[]|null;
    Bonds: IBond[]|null;
}