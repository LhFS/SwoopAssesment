/// <reference types='cypress' />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When("I'm on dashboard page", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/dashboard");
  });
});

Then("I can see the Welcome message", () => {
  cy.get('[class="ui header text dark h1 m-b-2"]').should(
    "have.text",
    " Welcome  Peter "
  );
  cy.get('[class="ui subtitle"]').should(
    "have.text",
    " You can now start the process to acquire new funds or gather insights into what savings you can make for your business. "
  );
});

And("I can see Accelerate funding process call to action", () => {
  cy.get('[class="ui fluid centered raised card"]')
    .get('[class="description"]')
    .first()
    .should(
      "have.text",
      "Receive faster decisions and accelerate your  funding process"
    );
  cy.get('[class="ui button btn-primary circular"]')
    .contains("Accelerate funding process")
    .should("be.visible");
});

And("I can see Explore funding options call to action", () => {
  cy.get('[class="ui fluid centered raised card"]')
    .get('[class="description"]')
    .eq(-2)
    .should("have.text", "Explore your  funding matches and apply");
  cy.get('[class="ui button btn-primary circular"]')
    .contains("Explore funding options")
    .should("be.visible");
});

And("I can see View potential savings call to action", () => {
  cy.get('[class="ui fluid centered raised card"]')
    .get('[class="description"]')
    .last()
    .should("have.text", "Save money with smarter spending decisions");
  cy.get('[class="ui button btn-primary circular"]')
    .contains("View potential savings")
    .should("be.visible");
});

And("I can see my tasks to complete", () => {
  cy.get('[class="card-item"]')
    .get('[class="ui title text dark"]')
    .contains("Tasks to complete")
    .should("be.visible");
  cy.get('[class="card-list"]')
    .find('[class="card-list-item"]')
    .should("have.length", "5");
});

And(
  "I can see the link account button and link accountancy software button",
  () => {
    cy.get('[class="ui alert board alert-spacing large"]')
      .get('[class="ui text"]')
      .should(
        "have.text",
        "Link your  financial data to find and apply for funds quicker and calculate savings"
      );
    cy.get('[class="ui button btn-primary circular"]')
      .contains("Link bank account")
      .should("be.visible");
    cy.get('[class="ui button btn-primary circular"]')
      .contains("Link accountancy software")
      .should("be.visible");
  }
);

And("I can see the unlock credit passport call to action", () => {
  cy.get('[class="banner alert"]')
    .get('[class="title"]')
    .should("have.text", "Unlock your Credit Passport");
  cy.get('[class="btn btn-transparent"]')
    .contains("Get your report")
    .should("be.visible");
});
