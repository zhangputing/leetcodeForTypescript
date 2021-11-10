import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case, Debug } from "../../test/CodeMap";
class TestCase extends TestBase<[number[], number], number> {
    public getFuncName(): string {
        return "TeemoAttacking";
    }

    @Case()
    private case1(): [[number[], number], number] {
        return [[[1, 4], 2], 4];
    }

    @Case()
    private case2(): [[number[], number], number] {
        return [[[1, 2], 2], 3];
    }

    @Case()
    private case3(): [[number[], number], number] {
        return [[[1, 2, 3, 4, 5], 5], 9];
    }

    @Case()
    private case4(): [[number[], number], number] {
        return [[[0, 1, 2, 3, 4], 1], 6];
    }
}
