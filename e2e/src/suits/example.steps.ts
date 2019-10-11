import { defineSupportCode } from "cucumber";
import { AppPage } from "../pages/app.po";

defineSupportCode(({ Given, When, Then, Before }) => {
  let mainPageObject = null;

  Before(() => {
    mainPageObject = new AppPage();
  });

  Given("I am on the main page of the system", () => {
    mainPageObject.navigateTo();
  });

  When("I am do nothing", () => {});

  Then("The title should be placed in the top-right corner of the page", () => {
    mainPageObject.getTitleText().then(title => {
      expect(title).toEqual("Magnetic Calculation Component");
    });
  });
});
