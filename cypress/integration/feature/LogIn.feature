Feature: Log in

  Scenario: I want to access my existing account

    Given I access the demo application
    When I fill the email ana.wilson+1mmm@gmail.com and password 123Test@
    And click in sing in button
    Then I log in in my account and can see the dashboard page