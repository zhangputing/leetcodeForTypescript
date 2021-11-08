import { AnswerType, CodeMap, IFuncType, IParameterType } from "./CodeMap";
import { TestLog } from "./TestLog";

export class RunPart {
    private static _log: TestLog;
    public static run() {
        RunPart._log = new TestLog();
        const funcMap = RunPart._getFuncMap();
        for (const name in funcMap) {
            RunPart._runOneFunc(name);
        }
    }

    private static _runByCase(name: string, parameter: IParameterType) {
        const funcMap = RunPart._getFuncMap();
        const func = funcMap[name].testFunc;
        const construct = funcMap[name].construct;
        const answer: AnswerType = func.bind(new construct.constructor())(...parameter.para);
        RunPart._log.printLogByAnswer(parameter, answer);
        RunPart._log._printLog(`${parameter.caseName}:`);
    }

    private static _runOneFunc(name: string) {
        RunPart._log._printSplitLine();
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

    private static _getFuncMap(): Record<string, IFuncType> {
        if (CodeMap._hasDebug()) {
            RunPart._log.isDebugMode = true;
            return CodeMap.DebugMap;
        } else {
            RunPart._log.isDebugMode = false;
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
