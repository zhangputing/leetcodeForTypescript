# Read ME
为了在LeetCode中更好地使用TypeScript，进行编程题目的训练

## 题目 
所有题目均在 src/leetCode

按照编号，题目名称命名

每个文件夹对应一个测试代码，一份测试用例。

LeetCode提交仅需将新建一个函数对象调用。

## 测试
测试代码，测试用例需要在entry注册

@Case()

注册测试用例

@Debug()

调试单一用例

@Func(name: string, debug?: boolean)

注册函数，name：题目名称，debug：调试单一题目

