export abstract class FuncBase<IAnswerType, IParameterType> {
    public abstract testFunc(para: IParameterType): IAnswerType;
}

export abstract class TestBase<IAnswerType, IParameterType> {
    public abstract getFuncName(): string;
}

export abstract class TestBaseMode {
    public abstract getFuncName(): string;
}
