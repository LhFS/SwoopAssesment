import { Given } from "cypress-cucumber-preprocessor/steps";
import CONSTANTS from "../../support/constants";

Given("I access the demo application", () => {
  cy.visit(CONSTANTS.URL);
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/login");
  });
  cy.get('[class="app-onboarding-container"]')
    .get('[class="swoop-logo"]')
    .should("be.visible");
});
