import { FuncBase } from "../../FunctionBase/FunctionBase";
import { CodeMap } from "../../test/CodeMap";
import "./TestCase";

class DistributeCandies extends FuncBase<number, number[]> {
    private _candyMap: Record<number, boolean> = {};
    private _res = 0;
    @CodeMap.registerFunc("DistributeCandies", true)
    public testFunc(para: number[]): number {
        this._traverseNumber(para);
        return this._res;
    }

    private _traverseNumber(candies: number[]) {
        const length = candies.length;
        for (let i = 0; i < length; i++) {
            if (this._res >= length / 2) {
                return;
            }
            if (!this._candyMap[candies[i]]) {
                this._res++;
                this._candyMap[candies[i]] = true;
            }
        }
    }
}
