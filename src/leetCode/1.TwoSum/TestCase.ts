import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case, Debug } from "../../test/CodeMap";
class TestCase extends TestBase<[number[], number], number[]> {
    public getFuncName(): string {
        return "TowSum";
    }

    @Case()
    private case1(): [[number[], number], number[]] {
        return [
            [[3, 3], 6],
            [0, 1],
        ];
    }

    @Case()
    private case2(): [[number[], number], number[]] {
        return [
            [[2, 7, 11, 15], 9],
            [0, 1],
        ];
    }

    @Case()
    private case3(): [[number[], number], number[]] {
        return [
            [[3, 2, 4], 6],
            [1, 2],
        ];
    }
}
