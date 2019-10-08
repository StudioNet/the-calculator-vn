import { EventEmitter } from "@angular/core";
import { MatrixPoint } from "../matrix/matrix-point.model";

export abstract class BaseCommand {
  private mainValue: any;
  private point: MatrixPoint;
  onClick: EventEmitter<any>;

  protected constructor() {
    this.onClick = new EventEmitter<any>(true);
  }

  value(theValue: any = null) {
    if (theValue == null) {
      return this.mainValue;
    }
    this.mainValue = theValue;
  }

  place(thePoint: MatrixPoint = null) {
    if (thePoint == null) {
      return this.point;
    }
    this.point = thePoint;
  }

  execute() {
    this.onClick.emit(this.mainValue);
  }
}
