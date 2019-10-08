import { BaseCommand } from "../abstract/base-command.model";
import { MatrixPoint } from "../matrix/matrix-point.model";
import { Operator } from "../abstract/operator.model";

export class OperationCommand extends BaseCommand {
  private operator: Operator;

  constructor(name: string, op: Operator) {
    super();
    this.value(name);
    this.place(new MatrixPoint());
    this.operator = op;
  }
}
