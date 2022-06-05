/// <reference types='cypress' />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CONSTANTS from "../../support/constants";
const wait_time = 2000;
const wait_application = 5000;

When("I click in create account button", () => {
  cy.get('[class="onboarding-header"]')
    .get("button")
    .contains("Create account")
    .click();
});

When("I click in sing in button", () => {
  cy.get('[data-testid="sign-in-submit-button"]').should("be.visible").click();
});

And("I fill all fields", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/sign-up/user");
  });

  function makeEmail() {
    var email = "ana.wilson+";
    var text = "";

    var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";

    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    var value = email + text.concat("@gmail.com");
    return value;
  }

  cy.get('input[type="text"][placeholder="First Name"]')
    .should("be.visible")
    .click()
    .type(CONSTANTS.firstName);
  cy.get('input[type="text"][placeholder="Last Name"]')
    .click()
    .type(CONSTANTS.lastName);
  cy.get('input[type="email"]').should("be.visible").click().type(makeEmail());
  cy.get('input[type="tel"]').should("be.visible").click().type(CONSTANTS.tel);
  cy.get('[class="sbx-searchbox"]')
    .should("be.visible")
    .click()
    .type("a")
    .wait(wait_time)
    .as("waitOptionsLoad")
    .get('[class="sbx-searchbox__suggestions"]')
    .contains("A LIMITED (GB) (05438136)")
    .click();
  cy.get('input[type="password"]')
    .should("be.visible")
    .click()
    .type(CONSTANTS.password);
  cy.get('input[type="checkbox"][name="isEmailMarketing"]').click({
    force: true,
  });

  cy.get('button[type="submit"]')
    .contains("Create account")
    .should("be.visible")
    .click();
});

Then("I see the onboarding screen", () => {
  cy.wait(wait_application).as("waitApplicationLoad");
  cy.get('[class="goals-container"]').should("be.visible");
});

And("I complete the onboarding", () => {
  const randomSelectTime = (
    Math.floor(Math.random() * (5 - 1 + 1)) + 1
  ).toString();
  const randomSelectMonth = (
    Math.floor(Math.random() * (11 - 0 + 0)) + 0
  ).toString();
  const randomSelectYear = (
    Math.floor(Math.random() * (2022 - 1923 + 1)) + 1923
  ).toString();

  cy.get('[data-testid="goal-button-1"]').should("be.visible").click();
  cy.get('[class="next-page active"]').should("be.visible").click();
  cy.get('[id="fundingRequired"]').should("be.visible").click().type("100000");
  cy.get('[id="fundingRequiredTimescale"]')
    .should("be.visible")
    .select(randomSelectTime);

  cy.get('[id="fundingPurposeSummary"][name="fundingPurposeSummary"]')
    .should("be.visible")
    .click({ force: true })
    .type("abc text");

  cy.get('[class="input-wrapper input-wrapper-multiselect"]')
    .should("be.visible")
    .click({ force: true })
    .get('[class="multiselect__element"]')
    .contains("Aerospace")
    .click({ force: true });

  cy.get('[id="isTrading-false"]').should("exist");
  cy.get('[id="isTrading-true"]').should("exist").click();

  cy.get('[data-testid="select-month"]')
    .should("be.visible")
    .select(randomSelectMonth);

  cy.get('[data-testid="select-year"]')
    .should("be.visible")
    .select(randomSelectYear);

  cy.get('[id="turnoverLastYear"]').should("be.visible").click().type("50000");
  cy.get('[id="monthlyRecurringRevenue"]')
    .should("be.visible")
    .click()
    .type("120000");

  cy.get('[id="profitableLastYear-false"]').should("exist");
  cy.get('[id="profitableLastYear-true"]').should("exist").click();
  cy.get('[id="cardPaymentsAccepted-false"]').should("exist");
  cy.get('[id="cardPaymentsAccepted-true"]').should("exist").click();
  cy.get('[id="invoicesSent-false"]').should("exist");
  cy.get('[id="invoicesSent-true"]').should("exist").click();

  cy.get('[id="invoiceAverageMonthlyRevenue"]')
    .should("exist")
    .click()
    .type("1200000");

  cy.get('[id="isHomeowner-false"]').should("exist");
  cy.get('[id="isHomeowner-true"]').should("exist").click();

  cy.get('[id="currentlyBank"]').select("Bank of Ireland (UK)");

  cy.get('[class="btn btn-back"]').should("exist");
  cy.get('[class="btn btn-primary"]').should("exist").click();
});

Then(
  "My account should be created and I have access to the matched loans",
  () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/matches/loans");
    });
    cy.get('[class="matches-title"]')
      .should("have.text", "Loan Funding")
      .get('[class="product-list-container"]')
      .should("be.visible");

    cy.get('[class="product-title"]')
      .should("have.text", "Instant Loan Offers")
      .get('[class="locked-wrapper"]')
      .should("be.visible");
  }
);

And("I see the call to action button to find more loans", () => {
  cy.get('[class="btn btn-primary"]')
    .contains("Find offers")
    .should("be.visible");
});

When("I click on the account menu", () => {
  cy.viewport(1024, 768);
  cy.get('[class="company-icon navbar"]').click();
});

And("I click on {} option", (item) => {
  cy.scrollTo("bottom");
  cy.get('[class="nav-items"]')
    .get('[class="item"]')
    .contains(item)
    .click({ force: true });
});

Then("I see Data Room", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/data-room/financials");
  });

  cy.get('[class="navigation-title h2"]').should("have.text", "Data Room");
});
And("I upload one file in {} option", (item) => {
  cy.get('[class="list-group"]')
    .get('[class="list-group-item-navigator"]')
    .contains(item)
    .click({ force: true });

  cy.get('[id="file-upload-input"]').selectFile("this-is-one-pdf.pdf", {
    action: "drag-drop",
  });
  cy.get('[class="btn btn-primary action-button"]')
    .contains("Upload Documents")
    .click();
});
