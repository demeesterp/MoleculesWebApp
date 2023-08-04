export interface IBond {
    Atom1Position:number,
    Atom2Position:number,
    Distance: number | null,
    BondOrder: number | null,
    BondOrderHOMO: number | null,
    BondOrderLUMO: number | null,
    OverlapPopulation: number | null,
    OverlapPopulationHOMO: number | null,
    OverlapPopulationLUMO: number | null
}