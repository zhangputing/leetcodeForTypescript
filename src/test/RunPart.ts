import { CodeMap, IFuncType, IParameterType } from "./CodeMap";

export class RunPart {
    public static run() {
        const funcMap = RunPart._getFuncMap();
        for (const name in funcMap) {
            RunPart._runOneFunc(name);
        }
    }

    private static _runByCase(name: string, parameter: IParameterType) {
        const funcMap = RunPart._getFuncMap();
        const func = funcMap[name].testFunc;
        const construct = funcMap[name].construct;
        const answer = func.bind(new construct.constructor())(parameter.para);
        console.log(`${parameter.caseName}:`);
        console.log("parameter: ", parameter.para, answer, parameter.expected);
        console.log("answer: ", answer);
        console.log("expected: ", parameter.expected);
    }

    private static _runOneFunc(name: string) {
        RunPart._printSplitLine();
        console.log(name);
        const parameters = RunPart._getCase(name);
        try {
            parameters.forEach((parameter) => {
                RunPart._runByCase(name, parameter);
            });
        } catch (e) {
            console.log("error in _runOneFunc");
            console.log(e);
        }
    }

    private static _printSplitLine() {
        console.log("------------------------------------");
    }

    private static _getFuncMap(): Record<string, IFuncType> {
        if (CodeMap._hasDebug()) {
            return CodeMap.DebugMap;
        } else {
            return CodeMap.CodeMap;
        }
    }

    private static _getCase(name: string): IParameterType[] {
        const map = CodeMap.DebugCaseMap[name];
        if (map) {
            return map;
        } else {
            return CodeMap.CaseMap[name];
        }
    }
}
