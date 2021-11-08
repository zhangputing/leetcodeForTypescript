import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case } from "../../test/CodeMap";
class TestCase extends TestBase<[string], number> {
    public getFuncName(): string {
        return "StringToInteger";
    }

    @Case()
    private case1(): [[string], number] {
        return [["42"], 42];
    }

    @Case()
    private case2(): [[string], number] {
        return [["   -42"], -42];
    }

    @Case()
    private case3(): [[string], number] {
        return [["4193 with words"], 4193];
    }

    @Case()
    private case4(): [[string], number] {
        return [["+-12"], 0];
    }

    @Case()
    private case5(): [[string], number] {
        return [["00000-42a1234"], 0];
    }

    @Case()
    private case6(): [[string], number] {
        return [["21474836460"], 2147483647];
    }

    @Case()
    private case7(): [[string], number] {
        return [["2147483648"], 2147483647];
    }
}
