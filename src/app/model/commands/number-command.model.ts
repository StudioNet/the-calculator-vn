import { BaseCommand } from "../abstract/base-command.model";
import { MatrixPoint } from "../matrix/matrix-point.model";

export class NumberCommand extends BaseCommand {
  constructor(value: number) {
    super();
    this.value(value);
    this.place(new MatrixPoint());
  }
}
