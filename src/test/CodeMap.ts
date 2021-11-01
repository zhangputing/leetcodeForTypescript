import { TestBaseMode } from "../FunctionBase/FunctionBase";

type ParameterType = number;
type AnswerType = number | boolean;

export interface IFuncType {
    testFunc: Function;
    construct: { constructor: new () => {} };
}

export interface IParameterType {
    para: ParameterType;
    expected: AnswerType;
    caseName: string;
}

export class CodeMap {
    public static CodeMap: Record<string, IFuncType> = {};
    public static DebugMap: Record<string, IFuncType> = {};
    public static CaseMap: Record<string, IParameterType[]> = {};
    public static DebugCaseMap: Record<string, IParameterType[]> = {};

    public static registerFunc(name: string, debug?: boolean) {
        return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
            if (CodeMap._hasDebug()) {
                return;
            }
            if (debug) {
                CodeMap._registerDebugFunc(name, descriptor, target);
                CodeMap._resetAllFunc();
            } else {
                CodeMap._registerAllFunc(name, descriptor, target);
            }
        };
    }

    public static registerCase() {
        return function (target: TestBaseMode, methodName: string, descriptor: PropertyDescriptor) {
            const name = target.getFuncName();
            CodeMap._initCaseByName(name);
            const [para, expected] = descriptor.value();
            CodeMap.CaseMap[name].push({ para: para, caseName: methodName, expected: expected });
        };
    }

    public static Debug() {
        return function (target: TestBaseMode, methodName: string, descriptor: PropertyDescriptor) {
            const name = target.getFuncName();
            CodeMap._initDebugCaseByName(name);
            const [para, expected] = descriptor.value();
            CodeMap.DebugCaseMap[name].push({ para: para, caseName: methodName, expected: expected });
        };
    }

    public static _hasDebug() {
        let res = false;
        for (let key in CodeMap.DebugMap) {
            if (key) {
                res = true;
                break;
            }
        }
        return res;
    }

    private static _initCaseByName(name: string) {
        if (!CodeMap.CaseMap[name]) {
            CodeMap.CaseMap[name] = [];
        }
    }

    private static _initDebugCaseByName(name: string) {
        if (!CodeMap.DebugCaseMap[name]) {
            CodeMap.DebugCaseMap[name] = [];
        }
    }

    private static _initFuncByName(name: string) {
        if (!CodeMap.CodeMap[name]) {
            CodeMap.CodeMap[name] = <IFuncType>{};
        }
    }

    private static _initDebugFuncByName(name: string) {
        if (!CodeMap.DebugMap[name]) {
            CodeMap.DebugMap[name] = <IFuncType>{};
        }
    }

    private static _registerDebugFunc(name: string, descriptor: PropertyDescriptor, target: any) {
        CodeMap._initDebugFuncByName(name);
        CodeMap.DebugMap[name].testFunc = descriptor.value;
        CodeMap.DebugMap[name].construct = target;
    }

    private static _registerAllFunc(name: string, descriptor: PropertyDescriptor, target: any) {
        CodeMap._initFuncByName(name);
        CodeMap.CodeMap[name].testFunc = descriptor.value;
        CodeMap.CodeMap[name].construct = target;
    }

    private static _resetAllFunc() {
        CodeMap.CodeMap = {};
    }
}
