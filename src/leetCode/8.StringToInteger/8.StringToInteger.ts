import { FuncBase } from "../../FunctionBase/FunctionBase";
import { CodeMap } from "../../test/CodeMap";
import "./TestCase";
const MaxNumber = 2147483648;
class StringToInteger extends FuncBase<number, string> {
    private static numberMap: Record<string, boolean> = {
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true,
    };
    private _res: number[] = [];
    private _operator = 1;

    @CodeMap.registerFunc("StringToInteger")
    public testFunc(para: string): number {
        this._parseString(para.trim());
        return this._fixNumber();
    }

    private _parseString(para: string) {
        const length = para.length;
        let hasOperator = false;
        for (let i = 0; i < length; i++) {
            const currentChar = para[i];
            if (this._isNumber(currentChar)) {
                this._res.push(Number(currentChar));
                continue;
            }
            if (this._isOperator(currentChar, hasOperator)) {
                hasOperator = true;
                this._operator = currentChar === "-" ? -1 : 1;
            } else {
                break;
            }
        }
    }

    private _fixNumber(): number {
        if (this._checkNumber()) {
            return this._composeNumber();
        } else {
            return this._operator > 0 ? MaxNumber - 1 : -MaxNumber;
        }
    }

    private _checkNumber(): boolean {
        this._removeZero();
        const max = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
        const length = this._res.length;
        if (length > 10) {
            return false;
        }
        if (length < 10) {
            return true;
        }
        let res = false;
        for (let i = 0; i < 10; i++) {
            if (max[i] === this._res[i]) {
                continue;
            }
            res = max[i] > this._res[i];
            break;
        }
        return res;
    }

    private _removeZero() {
        const array = this._res;
        const res: number[] = [];
        let isStart = true;
        array.forEach((number) => {
            if (number !== 0 || !isStart) {
                isStart = false;
                res.push(number);
            }
        });
        this._res = res;
    }

    private _composeNumber(): number {
        const array = this._res;
        const length = array.length;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            sum = sum * 10 + array[i];
        }
        return sum === 0 ? 0 : sum * this._operator;
    }

    private _isNumber(char: string) {
        if (StringToInteger.numberMap[char]) {
            return true;
        } else {
            return false;
        }
    }

    private _isOperator(char: string, hasOperator: boolean) {
        return this._res.length === 0 && (char === "+" || char === "-") && !hasOperator;
    }
}
