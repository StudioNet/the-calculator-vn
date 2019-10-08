import { AdditionOperator } from "./addition-operator.model";
import { Operator, typeGuard } from "../abstract/operator.model";

describe("The Addition Operator testing suite", () => {
  let operator = null;

  beforeEach(() => {
    operator = new AdditionOperator();
  });

  it("AdditionOperator must implements the Operator interface", () => {
    expect(typeGuard(operator)).toEqual(true);
  });

  it("AdditionOperator's execute method should return the calculated result", () => {
    const oneArgument = 135;
    const secArgument = 35;

    expect(operator.execute(oneArgument, secArgument)).toEqual(170);
  });

  it("AdditionOperator's execute method should throw the invalid argument error", () => {
    const oneArgument = "135";
    const secArgument = 35;
    try {
      return operator.execute(oneArgument, secArgument);
    } catch (e) {
      expect(e).toEqual(new Error("Invalid Argument"));
    }
  });
});
