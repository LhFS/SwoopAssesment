<H1>How to run automated tests to Swoop Assessment</h1>

<h3>Requirements</h3>

- Node installed in the machine

<h3>Steps to execute</h3>

- Clone this repository to your local computer
- Run the following comands:

```sh
npm install #to install dependencies
npm run cypress:open #to execute the tests one by one using cypress UI
npm run cypress:run && npm run postcypress:run #to execute all tests at the same time and get a HTML report with the tests outputs
```

<h3>About the project</h3>

In this project was used Cypress with Cucumber using Gherkin syntax, each feature has it own file located in `cypress/integration/feature`.

The language used was JavaScript.

In the folder `cypress/integration/common` we have all scripts files with the codes, was used one structure of files that allow us to reuse already created steps.

Was created 8 automated scenarios for: Singup, onboarding, sidebar, upload files, company profile, my profile, logout, login and dashboard.

And was created in `manual-test-scenarios/tests` 8 manual scenarios.
