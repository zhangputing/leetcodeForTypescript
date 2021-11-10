import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case, Debug } from "../../test/CodeMap";
class TestCase extends TestBase<number, number> {
    public getFuncName(): string {
        return "FuncName";
    }

    @Debug()
    @Case()
    private case1(): [number, number] {
        return [0, 1];
    }
}
