import { TestBase } from "../../FunctionBase/FunctionBase";
import { CodeMap } from "../../test/CodeMap";
class TestCase extends TestBase<[number[], number], number> {
    public getFuncName(): string {
        return "LongestArithmeticSubsequence";
    }

    @CodeMap.registerCase()
    private case1(): [[number[], number], number] {
        return [[[1, 2, 3, 4], 1], 4];
    }

    @CodeMap.registerCase()
    private case2(): [[number[], number], number] {
        return [[[3, 0, -3, 4, -4, 7, 6], 3], 2];
    }

    @CodeMap.registerCase()
    private case3(): [[number[], number], number] {
        return [[[4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8], 0], 2];
    }

    //@CodeMap.Debug()
    @CodeMap.registerCase()
    private case4(): [[number[], number], number] {
        return [[[1, 5, 7, 8, 5, 3, 4, 2, 1], -2], 4];
    }
}
