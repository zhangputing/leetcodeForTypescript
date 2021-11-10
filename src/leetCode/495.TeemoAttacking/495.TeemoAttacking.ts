import { FuncBase } from "../../FunctionBase/FunctionBase";
import { Func } from "../../test/CodeMap";
import "./TestCase";
class TeemoAttacking extends FuncBase<number[] | number, number> {
    private _res = 0;
    private _startTime: number = -1;
    private _endTime: number = -1;
    private _duration: number = 0;
    @Func("TeemoAttacking")
    public testFunc(timeSeries: number[], duration: number): number {
        this._duration = duration;
        timeSeries.forEach((time) => {
            this._setStartTime(time);
        });
        return this._res;
    }

    private _setStartTime(time: number) {
        this._calculateRes(time);
        this._startTime = time;
        this._endTime = this._startTime + this._duration - 1;
    }

    private _calculateRes(time: number) {
        if (time <= this._endTime) {
            this._res = this._res + (time + this._duration - 1 - this._endTime);
        } else {
            this._res += this._duration;
        }
    }
}
