export class MatrixPoint {
  rowIdx: number;
  columnIdx: number;
  visible: boolean;

  constructor() {
    this.rowIdx = 0;
    this.columnIdx = 0;
    this.visible = false;
  }

  static create(rowIdx: number, columnIdx: number, visible: boolean) {
    const thePoint = new MatrixPoint();
    thePoint.rowIdx = rowIdx;
    thePoint.columnIdx = columnIdx;
    thePoint.visible = visible;
    return thePoint;
  }

  start() {}
}
