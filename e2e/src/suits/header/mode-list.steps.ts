const chai = require("chai").use(require("chai-as-promised"));
import { Given, When, Then, Before } from "cucumber";
import { HeaderPageObject } from "../../pages/header.po";

let headerPageObject = null;
const expect = chai.expect;

Before(() => {
  headerPageObject = new HeaderPageObject();
});

Given(/Header has list of calculator modes$/, done => {
  headerPageObject.navigateTo().then(() => {
    headerPageObject.loadTypesList();
    done();
  });
});

When(/User changed the mode$/, async () => {
  await headerPageObject.selectMode("Programmer");
});

Then(
  "Calculator will be changed appropriated to the selected {string} mode",
  async title => {
    const theMode = await headerPageObject.getSelectedMode();
    expect(theMode).to.equal(title);
  }
);
