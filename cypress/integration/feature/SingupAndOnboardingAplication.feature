Feature: Sing up

  Scenario: Creating a new account in the application

    Given I access the demo application
    When I click in create account button
    And I fill all fields
    Then I see the onboarding screen
    And I complete the onboarding
    Then My account should be created and I have access to the matched loans
    And I see the call to action button to find more loans