Feature: Company Profile

  Scenario: I access and manage my company profile 

    Given I access the demo application
    And I fill the email ana.wilson+1mmm@gmail.com and password 123Test@
    And click in sing in button
    And I'm on dashboard page
    When I click on the account menu
    And I click on Company Profile option
    Then I see my company profile
    And I navigate through menu options
    And I change one information and save it
