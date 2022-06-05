Feature: Dashboard

  Scenario: I see the dashboard page

    Given I access the demo application
    When I fill the email ana.wilson+1mmm@gmail.com and password 123Test@
    And click in sing in button
    When I'm on dashboard page
    Then I can see the Welcome message
    And I can see Accelerate funding process call to action
    And I can see Explore funding options call to action
    And I can see View potential savings call to action
    And I can see my tasks to complete
    And I can see the link account button and link accountancy software button
    And I can see the unlock credit passport call to action