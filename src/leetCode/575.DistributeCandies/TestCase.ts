import { TestBase } from "../../FunctionBase/FunctionBase";
import { CodeMap } from "../../test/CodeMap";
class TestCase extends TestBase<[number[]], number> {
    public getFuncName(): string {
        return "DistributeCandies";
    }

    @CodeMap.registerCase()
    private case1(): [[number[]], number] {
        return [[[1, 1, 2, 2, 3, 3]], 3];
    }

    @CodeMap.registerCase()
    private case2(): [[number[]], number] {
        return [[[6, 6, 6, 6]], 1];
    }

    @CodeMap.Debug()
    @CodeMap.registerCase()
    private case3(): [[number[]], number] {
        return [[[1, 1, 2, 3]], 2];
    }
}
