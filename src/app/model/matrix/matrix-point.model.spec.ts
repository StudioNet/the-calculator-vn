import { MatrixPoint } from "./matrix-point.model";

describe("The MatrixPoint testing suite", () => {
  let matrinxPont: MatrixPoint;

  beforeEach(() => {
    matrinxPont = new MatrixPoint();
  });

  it("The default row index must be zero", () => {
    expect(matrinxPont.rowIdx).toBe(0);
  });

  it("The default column index must be zero", () => {
    expect(matrinxPont.columnIdx).toBe(0);
  });

  it("The static method 'create' should produce the point ", () => {
    const anotherPoint = MatrixPoint.create(3, 4, true);
    expect(anotherPoint.rowIdx).toBe(3);
    expect(anotherPoint.columnIdx).toBe(4);
    expect(anotherPoint.visible).toBeTruthy();
  });

  afterEach(() => {
    matrinxPont = null;
  });
});
