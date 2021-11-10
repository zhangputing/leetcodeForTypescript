import { FuncBase } from "../../FunctionBase/FunctionBase";
import { Func } from "../../test/CodeMap";
import "./TestCase";
class TowSum extends FuncBase<number[], number[] | number> {
    private _map: NumberMap = new NumberMap();
    private _res: number[] = [];
    @Func("TowSum")
    public testFunc(nums: number[], target: number): number[] {
        this._initMap(nums);
        this._findIndex(nums, target);
        return this._res;
    }

    private _initMap(nums: number[]) {
        nums.forEach((num, index) => {
            this._map.insertNum(num, index);
        });
    }

    private _findIndex(nums: number[], target: number) {
        const length = nums.length;
        for (let i = 0; i < length; i++) {
            const index = this._map.checkNum(target - nums[i], i);
            if (index > -1) {
                this._res.push(i);
                this._res.push(index);
                return;
            }
        }
    }
}

class NumberMap {
    private _map: Record<number, number[]> = {};
    public insertNum(num: number, index: number) {
        if (!this._map[num]) {
            this._map[num] = [index];
        } else {
            this._map[num].push(index);
        }
    }

    public checkNum(num: number, index: number): number {
        if (!this._map[num]) {
            return -1;
        } else {
            const resIndex = this._map[num].findIndex((item) => item != index);
            return resIndex === -1 ? -1 : this._map[num][resIndex];
        }
    }
}
