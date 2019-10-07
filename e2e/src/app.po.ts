import { browser, by, element } from "protractor";
// import { Promise } from "q";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css("sn-root .content span")).getText() as Promise<
      string
    >;
  }

  getMainNVersionButtonText() {
    return element(by.id("btnNVersion")).getText() as Promise<string>;
  }
}
