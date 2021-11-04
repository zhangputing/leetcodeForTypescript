import { TestBase } from "../../FunctionBase/FunctionBase";
import { CodeMap } from "../../test/CodeMap";

class TestCase extends TestBase<number, boolean> {
    public getFuncName(): string {
        return "Palindrome";
    }

    @CodeMap.registerCase()
    private case1(): [number, boolean] {
        return [456, false];
    }

    @CodeMap.registerCase()
    private case2(): [number, boolean] {
        return [454, true];
    }

    @CodeMap.registerCase()
    private case3(): [number, boolean] {
        return [45678, false];
    }

    @CodeMap.registerCase()
    private case4(): [number, boolean] {
        return [8456548, true];
    }
}
