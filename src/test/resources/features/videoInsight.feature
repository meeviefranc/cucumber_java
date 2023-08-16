Feature: Happy Path tests for AI Video Indexer - Video Insight
## happy path tests for ACs listed on User Story 2 - Video Insight

  Scenario: [1] Verify Insights available for a video
    ## page has insight sections : people, topics, audio effects, keywords, labels, named entities
    Given I login to videoindexer using google email
    And I wait for 10 seconds
    When I click on Samples link
    And I wait for 10 seconds
    And I click on the "Ignite 2016 - Keynote" video
    And I wait for 20 seconds
    Then I should see the player for the video
    And I should see "73 people" on "People" insight
    And I should see "4 topics" on "Topic" insight
    And I should see "4 audio effects" on "Audio Effects" insight
    And I should see "30 keywords" on "Keywords" insight
    And I should see "227 labels" on "Labels" insight
    And I should see "126 named entities" on "Named Entities" insight
    And I close the browser


