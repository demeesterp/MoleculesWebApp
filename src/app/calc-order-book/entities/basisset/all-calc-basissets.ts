import { CalcBasisSet } from "./calc-basisset";
import { CalcBasisSetCode } from "./calc-basisset-code";

export class AllCalcBasissets {
        private static  CalcBasisSets:CalcBasisSet[] = [];

        public static GetCalcBasisSet(code:CalcBasisSetCode) : CalcBasisSet | undefined
        {
           return AllCalcBasissets.CalcBasisSets.find(x=>x.Code == code);
        }

        static AllCalcBasisSets()
        {
            AllCalcBasissets.CalcBasisSets =
            [
                new CalcBasisSet(CalcBasisSetCode.BSTO3G,"STO-3G"),
                new CalcBasisSet(CalcBasisSetCode.B3_21G,"3-21G"),
                new CalcBasisSet(CalcBasisSetCode.B6_311plusplus2dp,"6-311G2dp"),
                new CalcBasisSet(CalcBasisSetCode.B6_31G,"6-31G"),
                new CalcBasisSet(CalcBasisSetCode.B6_31Gdp,"6-31Gdp"),
                new CalcBasisSet(CalcBasisSetCode.B6_31Gplus2dp,"6-31G+2dp"),
                new CalcBasisSet(CalcBasisSetCode.B6_31Gplusdp,"6-31G+dp")
            ];
        }
}