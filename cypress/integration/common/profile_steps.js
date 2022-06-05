/// <reference types='cypress' />
import { Then, And } from "cypress-cucumber-preprocessor/steps";

Then("I see my company profile", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/company-profile/funding-requirements");
  });

  cy.get('[class="navigation-title h2"]').should(
    "have.text",
    "Company Profile"
  );

  cy.get('[class="list-group"]').should("be.visible").as("MyProfileMenu");
});

Then("I see my profile", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/profile/personal-info");
  });
  cy.get("h2").should("contain", "Profile");

  cy.get('[class="list-group"]').should("be.visible").as("CompanyProfileMenu");
});

And("I navigate through menu options", () => {
  cy.get('[class="list-group"]').contains("Company Details").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/company-profile/company-details");
  });
  cy.get('[class="list-group"]').contains("Company Owners").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/company-profile/company-owners");
  });
  cy.get('[class="list-group"]').contains("Financial Information").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/company-profile/financial-information");
  });
  cy.get('[class="list-group"]').contains("Funding Requirements").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/company-profile/funding-requirements");
  });
});

And("I navigate through profile menu options", () => {
  cy.get('[class="list-group"]').contains("Email address").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/profile/email");
  });
  cy.get('[class="list-group"]').contains("Password").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/profile/password");
  });
  cy.get('[class="list-group"]').contains("Account details").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/profile/personal-info");
  });
});

And("I change one information and save it", () => {
  const randomRepayment = (
    Math.floor(Math.random() * (11 - 0 + 1)) + 1
  ).toString();
  cy.get('[class="ui subtitle checkbox-label"]').contains("Research").click();
  cy.get('input[name="totalFundingRequired"]').click().type("300000");
  cy.get('input[name="researchAndDevelopmentSpend"]').click().type("50000");
  cy.get('[name="fundingRepaymentPeriodMonth"]')
    .should("be.visible")
    .select(randomRepayment);
  cy.get(
    '[class="ui button btn-primary business-gradient circular form-submit-btn relative"]'
  )
    .contains("save")
    .click();
});

And("I change one information of my profile and save it", () => {
  const randomDay = (Math.floor(Math.random() * (31 - 1 + 1)) + 1).toString();

  const randomMonth = (Math.floor(Math.random() * (11 - 1 + 1)) + 1).toString();

  const randomYear = (
    Math.floor(Math.random() * (2021 - 1900 + 1)) + 1900
  ).toString();

  cy.get('[class="date-dropdown-select day"]').select(randomDay);
  cy.get('[class="date-dropdown-select month"]').select(randomMonth);
  cy.get('[class="date-dropdown-select year"]').select(randomYear);
  cy.get('[name="title"]').select("Sir");
  cy.get('[name="nationality"]').select("Brazilian");
  cy.get('[name="position"]').click().type("Just a QA Engineer");
  cy.get(
    '[class="ui button btn-primary business-gradient circular form-submit-btn relative"]'
  )
    .contains("save")
    .click();
});
