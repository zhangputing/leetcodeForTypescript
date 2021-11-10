import { FuncBase } from "../../FunctionBase/FunctionBase";
import { Func } from "../../test/CodeMap";
import "./TestCase";
class FuncName extends FuncBase<number, number> {
    @Func("FuncName", true)
    public testFunc(para: number): number {
        return 1;
    }
}
