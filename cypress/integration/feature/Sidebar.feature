Feature: Check sidebar options

  Scenario: I want to access all options in sidebar

    Given I access the demo application
    When I fill the email ana.wilson+1mmm@gmail.com and password 123Test@
    And click in sing in button
    And I see the sidebar
    And I navigate in matches option and suboptions
    And I navigate in banking option
    And I navigate in utilities option
    And I navigate in credit health check option
    And I navigate in fx option
    And I navigate in insurance option
    Then I finish navigating in integrations option