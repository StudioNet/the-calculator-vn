import { EventEmitter } from "@angular/core";
import { NumberCommand } from "./number-command.model";
import { BaseCommand } from "../abstract/base-command.model";
import { MatrixPoint } from "../matrix/matrix-point.model";

describe("The NumberCommand class testing suite", () => {
  let command = null;

  beforeEach(() => {
    command = new NumberCommand(5);
  });

  it("NumberCommand must inherits from BaseCommand", () => {
    expect(command instanceof BaseCommand).toEqual(true);
  });

  it("NumberCommand should initialize his point and value", () => {
    expect(command.value()).toEqual(5);
    expect(command.place()).toBeDefined();
  });

  it("Each NumberCommand instance must have the click event", () => {
    expect(command.onClick).toBeDefined();
    expect(command.onClick instanceof EventEmitter).toEqual(true);
  });

  it("NumberCommand will provide his value by public method", () => {
    const value = command.value();
    expect(value).toEqual(5);
  });

  it("NumberCommand will provide his place on board by public method", () => {
    const value = command.place();
    expect(value).toBeDefined();
    expect(value.rowIdx).toEqual(0);
    expect(value.columnIdx).toEqual(0);
  });

  it("NumberCommand will provide his value via the click event", () => {
    spyOn(command.onClick, "emit");

    command.execute();

    expect(command.onClick.emit).toHaveBeenCalledWith(5);
  });

  it("NumberCommand will provide subscribing method to it event", done => {
    command.onClick.subscribe(val => {
      expect(val).toEqual(command.value());
      done();
    });

    command.execute();
  });

  it("Replace the NumberCommand will be available via the place method", () => {
    const point = MatrixPoint.create(2, 4, true);

    command.place(point);

    expect(command.place().rowIdx).toEqual(2);
    expect(command.place().columnIdx).toEqual(4);
  });
});
