import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case } from "../../test/CodeMap";

class TestCase extends TestBase<[number], boolean> {
    public getFuncName(): string {
        return "Palindrome";
    }

    @Case()
    private case1(): [[number], boolean] {
        return [[456], false];
    }

    @Case()
    private case2(): [[number], boolean] {
        return [[454], true];
    }

    @Case()
    private case3(): [[number], boolean] {
        return [[45678], false];
    }

    @Case()
    private case4(): [[number], boolean] {
        return [[8456548], true];
    }
}
