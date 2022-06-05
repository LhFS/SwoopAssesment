/// <reference types='cypress' />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
const waitApplicationLoad = 2000;

When("I fill the email {} and password {}", (email, password) => {
  cy.get('input[type="email"]').click().type(email);
  cy.get('input[id="sign-in-password"]').click().type(password);
});

And("click in sing in button", () => {
  cy.get('[id="sign-in-button"]').contains("Sign in").click();
});

Then("I log in in my account and can see the dashboard page", () => {
  cy.viewport(1024, 768);
  cy.wait(waitApplicationLoad).as("waitApplicationLoad");
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/dashboard");
  });
  cy.get('[class="menu"]').as("Sidebar").should("be.visible");
  cy.get('[class="app-header sme-theme"]')
    .find('[class="logo-wrapper"]')
    .as("SwoopLogo")
    .should("be.visible");
  cy.get('[class="welcome-company-message"]')
    .as("Header")
    .should("have.text", "Hi, A LIMITED");
  cy.get('[class="company-icon navbar"]').should("be.visible");
  cy.get('[class="ui container business"]').should("be.visible");

  When("I click in the account icon and press to logout", () => {
    cy.get('[class="company-icon navbar"]').click();
    cy.get('[class="item logout"]').contains("Logout").click({ force: true });
  });

  Then("I see I'm not logged", () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/login/");
    });
    cy.get('[class="app-onboarding-container"]')
      .get('[class="swoop-logo"]')
      .should("be.visible");

    cy.get('[class="main-left-panel"]')
      .find('[data-testid="onboarding-left-panel-title"]')
      .should("have.text", "Welcome back");
  });
});
