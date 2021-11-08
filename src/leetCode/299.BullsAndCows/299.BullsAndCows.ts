import { FuncBase } from "../../FunctionBase/FunctionBase";
import { Func } from "../../test/CodeMap";
import "./TestCase";
class BullsAndCows extends FuncBase<string, string> {
    private _secretMap: Record<number, number> = {};
    private _guessMap: number[] = [];
    private _bulls = 0;
    private _cows = 0;
    @Func("BullsAndCows")
    public testFunc(secret: string, guess: string): string {
        this._initNumber(secret, guess);
        this._checkAllGuessNumber();
        return `${this._bulls}A${this._cows}B`;
    }

    private _initNumber(secret: string, guess: string) {
        const length = secret.length;
        for (let i = 0; i < length; i++) {
            const secretNum = Number(secret[i]);
            const guessNum = Number(guess[i]);
            if (secretNum === guessNum) {
                this._bulls++;
            } else {
                this._setSecretMap(secretNum);
                this._checkCows(guessNum);
            }
        }
    }

    private _checkCows(guessNum: number) {
        if (this._secretMap[guessNum]) {
            this._cows++;
            this._delSecretMap(guessNum);
        } else {
            this._guessMap.push(guessNum);
        }
    }

    private _checkAllGuessNumber() {
        const allNum = this._guessMap;
        allNum.forEach((num) => {
            if (this._secretMap[num]) {
                this._cows++;
                this._delSecretMap(num);
            }
        });
    }

    private _setSecretMap(num: number) {
        if (this._secretMap[num]) {
            this._secretMap[num]++;
        } else {
            this._secretMap[num] = 1;
        }
    }

    private _delSecretMap(num: number) {
        this._secretMap[num]--;
        if (this._secretMap[num] === 0) {
            delete this._secretMap[num];
        }
    }
}
