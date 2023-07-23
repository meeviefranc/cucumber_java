Feature: Happy Path tests for AI Video Indexer

  Scenario: [1] Verify Upload screen
    Given I login to videoindexer using google email
    And user waits for 10 seconds
    When I click on Samples link
    And I click on Upload button
    And user waits for 10 seconds
    Then I should see the "Browse for files" button
    And I should see the "Enter URL" button
    And I close the browser

  Scenario: [2] Verify Upload using Browse For files
    Given I login to videoindexer using google email
    And user waits for 10 seconds
    And I click on Samples link
    And I click on Upload button
    And user waits for 10 seconds
    When I click on "Browse for files" button to upload file "GovTechImNotAValidVideo.txt"
    Then message "File type is not supported" appears in the upload pop up window
    And filename "GovTechImNotAValidVideo" is displayed in the filename textbox
    When I click on Cancel button
    And I leave Upload and Index page
    And I click on Upload button
    And user waits for 10 seconds
    And I click on "Enter URL" button to enter url "https://www.videoindexer.ai/accounts/00000000-0000-0000-0000-000000000000/videos/c19ab92882"
#    And I close the browser