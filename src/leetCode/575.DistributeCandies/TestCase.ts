import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case } from "../../test/CodeMap";
class TestCase extends TestBase<[number[]], number> {
    public getFuncName(): string {
        return "DistributeCandies";
    }

    @Case()
    private case1(): [[number[]], number] {
        return [[[1, 1, 2, 2, 3, 3]], 3];
    }

    @Case()
    private case2(): [[number[]], number] {
        return [[[6, 6, 6, 6]], 1];
    }

    @Case()
    private case3(): [[number[]], number] {
        return [[[1, 1, 2, 3]], 2];
    }
}
