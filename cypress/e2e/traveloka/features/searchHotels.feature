Feature: Automation test using Cypress for the Traveloka "Search Hotels" feature

As a User I want to Search Hotel in Bandung using "Search Hotels" feature

Background: User Navigate To Traveloka
    Given User navigate to Traveloka website

    Scenario: User Search Hotels from Registration Page
    When User navigate to hotels section
    And User search for hotels located in Bandung
    And User select hotel location result
    And User set the check-in date to the current date plus 7 days
    And User set the duration to 1 night
    And User set the number of Guests to 2 in the adult field
    Then User click the Search Hotels button
    And Validate that the hotel location is in Bandung