import { FuncBase } from "../../FunctionBase/FunctionBase";
import { Func } from "../../test/CodeMap";
import "./TestCase";

class Palindrome extends FuncBase<boolean, number> {
    @Func("Palindrome")
    public testFunc(para: number): boolean {
        const numbers: number[] = this._sliceNumber(para);
        return this._isPalindrome(numbers);
    }

    private _sliceNumber(num: number): number[] {
        let n = num;
        const res: number[] = [];
        while (n > 0) {
            res.push(n % 10);
            n = Math.floor(n / 10);
        }
        return res;
    }

    private _isPalindrome(allNum: number[]): boolean {
        let res = true;
        let end = allNum.length - 1;
        for (let start = 0; start < end; start++, end--) {
            if (allNum[start] !== allNum[end]) {
                res = false;
                break;
            }
        }
        return res;
    }
}
