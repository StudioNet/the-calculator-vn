export interface Operator {
  name: string;
  symbol: any;
  execute(firstArgument: number, secondArgument: number): number;
}

export function typeGuard(op: Operator): op is Operator {
  const theOperator = op as Operator;
  return theOperator.name !== "" && theOperator.execute !== undefined;
}

export function numberGuard(arg: number): number {
  if (!((arg as number).toFixed !== undefined)) {
    throw new Error("Invalid Argument");
  }
  return arg;
}
