import {
  browser,
  by,
  element,
  promise,
  ElementFinder,
  ElementArrayFinder
} from "protractor";

// const browser = require("protractor").browser;
// const element = require("protractor").element;
// const by = require("protractor").by;

export class HeaderPageObject {
  private typesList: ElementArrayFinder;
  private lastModeSelected: string;

  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getTitleText() {
    return element(by.css(".title h2")).getText();
  }

  loadTypesList() {
    this.typesList = element.all(by.css(".calculator-type-list-item"));
  }

  async listCount() {
    if (this.isTypeListExist()) {
      return await this.typesList.count();
    }
    return 0;
  }

  async isTypeExist(type: string): promise.Promise<boolean> {
    return this.findType(type).isDisplayed();
  }

  async selectMode(mode: string): promise.Promise<void> {
    const selectedType = this.findType(mode);
    return selectedType.click().then(() => {
      return selectedType.getText().then(type => {
        this.lastModeSelected = type;
      });
    });
  }

  async getSelectedMode(): promise.Promise<string> {
    return promise.Promise.resolve(this.lastModeSelected);
  }

  private findType(type: string): ElementFinder {
    return this.typesList
      .filter((el, idx) => {
        return el.getText().then(typeName => typeName === type);
      })
      .first();
  }

  private isTypeListExist(): boolean {
    return this.typesList != null;
  }
}
