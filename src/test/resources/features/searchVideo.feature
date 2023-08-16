Feature: Happy Path tests for AI Video Indexer - Search Video
## happy path tests for ACs listed on User Story 3 - Search Video

  Scenario: [1] Verify Search box
    ## page displays a search box where a search can be entered and click search will perform query
    Given I login to videoindexer using google email
    And I wait for 10 seconds
    When I click on Samples link
    And I wait for 10 seconds
    And I enter "ignite" on the search box
    And I press Enter on the search box
    And I wait for 5 seconds
    Then I should see "Ignite 2016 - Keynote" on search results
#    And I close the browser


