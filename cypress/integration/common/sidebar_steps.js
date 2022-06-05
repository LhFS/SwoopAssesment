/// <reference types='cypress' />
import { Then, And } from "cypress-cucumber-preprocessor/steps";
import CONSTANTS from "../../support/constants";
const wait_application = 2000;

And("I see the sidebar", () => {
  cy.viewport(1024, 768).as("DesktopView");
  cy.wait(wait_application).as("waitApplicationLoad");
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/dashboard");
  });
  cy.get('[class="menu"]').as("Sidebar").should("be.visible");
});

And("I navigate in matches option and suboptions", () => {
  cy.get('[class="menu"]')
    .get('[class="menu-item-main link menu-item-has-children"]')
    .contains("Matches")
    .click();
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

  cy.get('[class="btn btn-primary"]')
    .contains("Find offers")
    .should("be.visible");

  cy.get('[class="menu-item-child link"]').contains("Equity funding").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/matches/equity");
  });

  cy.get('[class="products-locked-card"]')
    .should("be.visible")
    .get('[class="title"]')
    .should("have.text", "Unlock Equity");
  cy.get('[class="products-locked-card"]')
    .get('[class="subtitle"]')
    .should("have.text", "Find equity funding in less than 5 minutes");
  cy.get('[class="btn btn-primary btn-sm"]')
    .contains("Provide more information")
    .as("callToAction")
    .should("be.visible");

  cy.get('[class="menu-item-children"]').contains("Grant funding").click();
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/matches/grants");
  });

  cy.get('[class="products-locked-card"]')
    .should("be.visible")
    .get('[class="title"]')
    .should("have.text", "Unlock Grants");
  cy.get('[class="products-locked-card"]')
    .should("be.visible")
    .get('[class="subtitle"]')
    .should("have.text", "Find a grant in less than 5 minutes");
  cy.get('[class="btn btn-primary btn-sm"]')
    .contains("Provide more information")
    .as("callToAction")
    .should("be.visible");

  And("I navigate in banking option", () => {
    cy.get('[class="menu"]')
      .get('[class="menu-item"]')
      .contains("Banking")
      .then(($a) => {
        expect($a).to.have.attr("target", "_blank");
        $a.attr("target", "_self");
      })
      .click();
    cy.url().should(
      "include",
      "https://swoopfunding.com/compare-business-current-account/"
    );
    cy.visit(CONSTANTS.URL); //TO BACK TO APPLICATION
  });

  And("I navigate in utilities option", () => {
    cy.get('[class="menu"]').as("Sidebar").should("be.visible");
    cy.get('[class="menu"]')
      .get('[class="menu-item"]')
      .contains("Utilities")
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/savings/services/utilities");
    });

    cy.get('[class="title m-b-10"]')
      .should("be.visible")
      .and("have.text", "Energy Saving");
    cy.get('[class="h6 m-b-5"]').should("have.text", "Utilities");
    cy.get('[class="ui stackable container"]').should("be.visible");
    cy.get('[class="btn btn-back"]').contains("Back").click();
  });

  And("I navigate in credit health check option", () => {
    cy.get('[class="menu"]').as("Sidebar").should("be.visible");
    cy.get('[class="menu"]')
      .get('[class="menu-item"]')
      .contains("Credit health check")
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/credit-health-check");
    });

    cy.get('[class="background"]').should("be.visible");

    cy.scrollTo("bottom");
  });

  And("I navigate in fx option", () => {
    cy.get('[class="menu"]').as("Sidebar").should("be.visible");
    cy.get('[class="menu"]').get('[class="menu-item"]').contains("FX").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/savings/services/foreign-exchange");
    });

    cy.get('[class="foreign-exchange-page"]').should("be.visible");
    cy.get('[class="title m-b-10"]')
      .should("be.visible")
      .and("have.text", "TransferWise");
    cy.get('[class="h6 m-b-5"]').should("have.text", "Foreign exchange (FX)");
    cy.get('[class="ui container"]')
      .get('[class="offer-container"]')
      .should("be.visible");
    cy.get('[class="btn btn-back"]').contains("Back").click();
  });

  And("I navigate in insurance option", () => {
    cy.scrollTo("bottom");
    cy.get('[class="menu"]').as("Sidebar").should("be.visible");
    cy.get('[class="menu"]')
      .get('[class="menu-item"]')
      .contains("Insurance")
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/insurance");
    });

    cy.get('[class="insurance-title"]').should("have.text", "Insurance");
    cy.get('[class="ui insurance-wrapper container"]').should("be.visible");
  });

  Then("I finish navigating in integrations option", () => {
    cy.get('[class="menu"]').as("Sidebar").should("be.visible");
    cy.get('[class="menu"]')
      .get('[class="menu-item"]')
      .contains("Integrations")
      .click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/integrations");
    });

    cy.get('[class="integrations-title"]').should("have.text", "Integrations");
    cy.get('[class="ui integration-wrapper container"]').should("be.visible");
  });
});
