Feature: Log out

  Scenario: I want to log out my Swoop account

    Given I access the demo application
    And I fill the email ana.wilson+1mmm@gmail.com and password 123Test@
    And click in sing in button
    And I log in in my account and can see the dashboard page
    When I click in the account icon and press to logout
    Then I see I'm not logged 