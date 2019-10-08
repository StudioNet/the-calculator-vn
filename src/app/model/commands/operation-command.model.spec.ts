import { EventEmitter } from "@angular/core";
import { OperationCommand } from "./operation-command.model";
import { BaseCommand } from "../abstract/base-command.model";
import { MatrixPoint } from "../matrix/matrix-point.model";
import { AdditionOperator } from "../math/addition-operator.model";

describe("The OperationCommand testing suite", () => {
  let command = null;

  beforeEach(() => {
    command = new OperationCommand("add", new AdditionOperator());
  });

  it("OperationCommand must inherits from BaseCommand", () => {
    expect(command instanceof BaseCommand).toEqual(true);
  });

  it("OperationCommand should initialize his point and value", () => {
    expect(command.value()).toEqual("add");
    expect(command.place()).toBeDefined();
  });

  it("Each OperationCommand instance must have the click event", () => {
    expect(command.onClick).toBeDefined();
    expect(command.onClick instanceof EventEmitter).toEqual(true);
  });

  it("OperationCommand will provide his value by public method", () => {
    const value = command.value();
    expect(value).toEqual("add");
  });

  it("OperationCommand will provide his place on board by public method", () => {
    const value = command.place();
    expect(value).toBeDefined();
    expect(value.rowIdx).toEqual(0);
    expect(value.columnIdx).toEqual(0);
  });

  it("OperationCommand will provide his value via the click event", () => {
    spyOn(command.onClick, "emit");

    command.execute();

    expect(command.onClick.emit).toHaveBeenCalledWith("add");
  });

  it("OperationCommand will provide subscribing method to it event", done => {
    command.onClick.subscribe(val => {
      expect(val).toEqual(command.value());
      done();
    });

    command.execute();
  });

  it("Replace the OperationCommand will be available via the place method", () => {
    const point = MatrixPoint.create(2, 4, true);

    command.place(point);

    expect(command.place().rowIdx).toEqual(2);
    expect(command.place().columnIdx).toEqual(4);
  });
});
