import assert from "assert";
import { IParameterType, AnswerType } from "./CodeMap";

export class TestLog {
    private _isDebugMode = false;
    public set isDebugMode(isDebugMode: boolean) {
        this._isDebugMode = isDebugMode;
    }
    public get isDebugMode() {
        return this._isDebugMode;
    }

    public printLogByAnswer(parameter: IParameterType, answer: AnswerType) {
        if (this._isDebugMode) {
            console.log(`${parameter.caseName}:`);
            console.log("parameter: ", parameter.para, answer, parameter.expected);
            console.log("answer: ", answer);
            console.log("expected: ", parameter.expected);
        } else {
            try {
                assert.deepEqual(answer, parameter.expected);
                console.log(`${parameter.caseName}:`, true);
            } catch (e) {
                console.log(`${parameter.caseName}:`, false);
            }
        }
    }

    public _printSplitLine() {
        console.log("------------------------------------");
    }

    public _printLog(str: string) {
        console.log(str);
    }
}
