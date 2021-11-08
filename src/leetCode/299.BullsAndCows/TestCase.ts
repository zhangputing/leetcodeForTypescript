import { TestBase } from "../../FunctionBase/FunctionBase";
import { Case, Debug } from "../../test/CodeMap";
class TestCase extends TestBase<[string, string], string> {
    public getFuncName(): string {
        return "BullsAndCows";
    }

    @Case()
    private case1(): [[string, string], string] {
        return [["1807", "7810"], "1A3B"];
    }

    @Case()
    private case2(): [[string, string], string] {
        return [["1123", "0111"], "1A1B"];
    }

    @Case()
    private case3(): [[string, string], string] {
        return [["1", "0"], "0A0B"];
    }

    @Case()
    private case4(): [[string, string], string] {
        return [["1", "1"], "1A0B"];
    }

    @Case()
    private case5(): [[string, string], string] {
        return [["1122", "2211"], "0A4B"];
    }
}
