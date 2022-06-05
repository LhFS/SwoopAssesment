Feature: My profile

  Scenario: I access and manage my profile page

    Given I access the demo application
    And I fill the email ana.wilson+1mmm@gmail.com and password 123Test@
    And click in sing in button
    And I'm on dashboard page
    When I click on the account menu
    And I click on My Profile option
    Then I see my profile
    And I navigate through profile menu options
    And I change one information of my profile and save it