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

export class AppPage {
  private typesList: ElementArrayFinder;

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
    const typeItem = this.typesList
      .filter((el, idx) => {
        return el.getText().then(typeName => typeName === type);
      })
      .first();

    return typeItem.isDisplayed();
  }

  private isTypeListExist(): boolean {
    return this.typesList != null;
  }
}

// module.exports = AppPage;
