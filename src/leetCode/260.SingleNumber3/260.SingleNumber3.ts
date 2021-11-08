import { FuncBase } from "../../FunctionBase/FunctionBase";
import { Func } from "../../test/CodeMap";
import "./TestCase";

class SingleNumber3 extends FuncBase<number[], number[]> {
    private _numbers: Record<number, boolean> = {};
    @Func("SingleNumber3")
    public testFunc(para: number[]): number[] {
        this._initPara(para);
        return this._getRes();
    }

    private _initPara(para: number[]) {
        const map = this._numbers;
        para.forEach((number) => {
            if (map[number]) {
                delete map[number];
            } else {
                map[number] = true;
            }
        });
    }

    private _getRes() {
        const map = this._numbers;
        const res: number[] = [];
        for (const key in map) {
            res.push(Number(key));
        }
        return res;
    }
}
