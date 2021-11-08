import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case } from "../../test/CodeMap";
class TestCase extends TestBase<[number[], number], number> {
    public getFuncName(): string {
        return "LongestArithmeticSubsequence";
    }

    @Case()
    private case1(): [[number[], number], number] {
        return [[[1, 2, 3, 4], 1], 4];
    }

    @Case()
    private case2(): [[number[], number], number] {
        return [[[3, 0, -3, 4, -4, 7, 6], 3], 2];
    }

    @Case()
    private case3(): [[number[], number], number] {
        return [[[4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8], 0], 2];
    }

    //@CodeMap.Debug()
    @Case()
    private case4(): [[number[], number], number] {
        return [[[1, 5, 7, 8, 5, 3, 4, 2, 1], -2], 4];
    }
}
