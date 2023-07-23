Feature: Happy Path tests for AI Video Indexer

  Scenario: [1] Verify Upload screen
    Given I login to videoindexer using google email
    And user waits for 10 seconds
    And I click on Samples link
    And I click on Upload button
    And user waits for 10 seconds
    Then I should see the "Enter URL" button
