import { TestBase } from "../../FunctionBase/FunctionBase";
import { CodeMap } from "../../test/CodeMap";
class TestCase extends TestBase<string, number> {
    public getFuncName(): string {
        return "StringToInteger";
    }

    @CodeMap.registerCase()
    private case1(): [string, number] {
        return ["42", 42];
    }

    @CodeMap.registerCase()
    private case2(): [string, number] {
        return ["   -42", -42];
    }

    @CodeMap.registerCase()
    private case3(): [string, number] {
        return ["4193 with words", 4193];
    }

    @CodeMap.registerCase()
    private case4(): [string, number] {
        return ["+-12", 0];
    }

    @CodeMap.registerCase()
    private case5(): [string, number] {
        return ["00000-42a1234", 0];
    }

    @CodeMap.registerCase()
    private case6(): [string, number] {
        return ["21474836460", 2147483647];
    }

    @CodeMap.registerCase()
    private case7(): [string, number] {
        return ["2147483648", 2147483647];
    }
}
