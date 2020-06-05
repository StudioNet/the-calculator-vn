const chai = require("chai").use(require("chai-as-promised"));
import { Given, When, Then, Before } from "cucumber";
import { HeaderPageObject } from "../../pages/header.po";

let headerPageObject = null;
const expect = chai.expect;

Before(() => {
  headerPageObject = new HeaderPageObject();
});

Given(/User on the main page$/, async () => {
  await headerPageObject.navigateTo();
});

When(/User does nothing$/, done => {
  done();
});

Then("The title of the component should be {string}", async title => {
  const theTitle = await headerPageObject.getTitleText();
  expect(theTitle).to.equal(title);
});
