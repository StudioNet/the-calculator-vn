import { Operator, numberGuard } from "../abstract/operator.model";

export class SubtractionOperator implements Operator {
  name: string;
  symbol: any;
  execute(firstArgument: number, secondArgument: number): number {
    firstArgument = numberGuard(firstArgument);
    secondArgument = numberGuard(secondArgument);
    return firstArgument - secondArgument;
  }
}
