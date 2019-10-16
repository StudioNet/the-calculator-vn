const chai = require("chai").use(require("chai-as-promised"));
import { Given, When, Then, Before } from "cucumber";
import { AppPage } from "../pages/app.po";

let mainPageObject = null;
const expect = chai.expect;

Before(() => {
  mainPageObject = new AppPage();
});

Given("I am on the main page of the system", async () => {
  await mainPageObject.navigateTo();
});

When(/I am do nothing$/, done => {
  done();
});

Then(
  /The title should be placed in the top-right corner of the page$/,
  async () => {
    const title = await mainPageObject.getTitleText();
    expect(title).to.equal("Magnetic Calculation Component");
  }
);

// ====================================================================

Given(/Calculator have the following types$/, done => {
  mainPageObject.loadTypesList();
  done();
});

When(/I see the calculator's types list$/, done => {
  done();
});

Then(/The list of calculator types should be exist$/, async types => {
  const listCount = await mainPageObject.listCount();
  const typesKeys = types.rawTable[0][0].split(",");
  expect(listCount).to.equal(typesKeys.length);
  for (let idx = 0; idx < listCount; idx++) {
    // tslint:disable-next-line: no-unused-expression
    expect(await mainPageObject.isTypeExist(typesKeys[idx].trim())).to.be.true;
  }
});
