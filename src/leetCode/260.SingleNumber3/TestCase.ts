import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case } from "../../test/CodeMap";
class TestCase extends TestBase<[number[]], number[]> {
    public getFuncName(): string {
        return "SingleNumber3";
    }
    @Case()
    private case1(): [[number[]], number[]] {
        return [[[1, 2, 1, 3, 2, 5]], [3, 5]];
    }
}
