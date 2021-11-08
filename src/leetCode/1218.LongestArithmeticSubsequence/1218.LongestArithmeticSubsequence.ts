import { FuncBase } from "../../FunctionBase/FunctionBase";
import { CodeMap } from "../../test/CodeMap";
import "./TestCase";
class LongestArithmeticSubsequence extends FuncBase<number, number[] | number> {
    private _hasChecked: Record<number, boolean> = {};
    private _arrMap: ArrMap = new ArrMap();
    private _sum: number = 0;
    private _res: number = 0;
    private _currentIndex: number = -1;
    @CodeMap.registerFunc("LongestArithmeticSubsequence", true)
    public testFunc(arr: number[], difference: number): number {
        this._initArrayMap(arr);
        this._queryAllNumber(arr, difference);
        return this._res;
    }

    private _initArrayMap(arr: number[]) {
        arr.forEach((item, index) => {
            this._arrMap.addNumber(item, index);
        });
    }

    private _queryAllNumber(arr: number[], difference: number) {
        arr.forEach((num, index) => {
            if (!this._hasCheckedNumber(index)) {
                this._sum = 0;
                this._currentIndex = index;
                this._findNextNumber(num, difference);
            }
        });
    }

    private _findNextNumber(currentNumber: number, difference: number) {
        this._sum++;
        this._setCheckedNumber(currentNumber);
        const nextNumber = currentNumber + difference;
        if (this._isPresetNumber(nextNumber)) {
            this._findNextNumber(nextNumber, difference);
        }
        this._setRes();
    }

    private _setRes() {
        this._res = Math.max(this._sum, this._res);
    }

    private _isPresetNumber(nextNumber: number) {
        this._currentIndex = this._arrMap.getNextNumberIndex(nextNumber, this._currentIndex);
        return this._currentIndex > -1;
    }

    private _hasCheckedNumber(index: number) {
        return this._hasChecked[index];
    }

    private _setCheckedNumber(num: number) {
        const allIndex = this._arrMap.getAllIndex(num);
        allIndex.forEach((index) => {
            this._hasChecked[index] = true;
        });
    }
}

class ArrMap {
    private _arrMap: Record<number, number[]> = {};

    public addNumber(num: number, index: number) {
        if (this._arrMap[num]) {
            this._arrMap[num].push(index);
        } else {
            this._arrMap[num] = [index];
        }
    }

    public getNextNumberIndex(nextNumber: number, index: number) {
        if (this._arrMap[nextNumber]) {
            const length = this._arrMap[nextNumber].length;
            for (let i = 0; i < length; i++) {
                if (index < this._arrMap[nextNumber][i]) {
                    return this._arrMap[nextNumber][i];
                }
            }
        }
        return -1;
    }

    public getAllIndex(num: number) {
        return this._arrMap[num] || [];
    }
}
