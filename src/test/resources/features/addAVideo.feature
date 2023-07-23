Feature: Happy Path tests for AI Video Indexer - Add A Video
## happy path tests for ACs listed on User Story 1 - Add a Video

  Scenario: [1] Verify Upload screen
    ## page allows selection of a file for uploading or the user can supply a url to a video for indexing
    Given I login to videoindexer using google email
    And I wait for 10 seconds
    When I click on Samples link
    And I click on Upload button
    And I wait for 10 seconds
    Then I should see the "Browse for files" button
    And I should see the "Enter URL" button
    And I close the browser

  Scenario: [2] Verify Upload using Browse For files
    ## video source language can be specific, page allows privacy to be set, advance options available
    Given I login to videoindexer using google email
    And I wait for 10 seconds
    And I click on Samples link
    And I click on Upload button
    And I wait for 10 seconds
    When I click on "Browse for files" button to upload file "GovTechImNotAValidVideo.txt"
    Then message "File type is not supported" appears in the upload pop up window
    And filename "GovTechImNotAValidVideo" is displayed in the filename textbox
    When I select "Danish" in "Video Source Language" list box
    Then "Video Source Language" listbox displays "Danish"
    And "Privacy" listbox displays "Private"
    And Advanced settings link is available
    When I click on Cancel button
    And I leave Upload and Index page
    And I close the browser

  Scenario: [3] Verify Upload using URL
    ## clicking upload button will start indexing process and notification is received once completed
    Given I login to videoindexer using google email
    And I wait for 10 seconds
    And I click on Samples link
    And I click on Upload button
    And I wait for 10 seconds
    When I click on "Enter URL" button to enter url "https://media.istockphoto.com/id/1151597371/video/the-couple-with-camping-backpacks-walking-to-the-mountain-top-slow-motion.mp4?s=mp4-640x640-is&k=20&c=XsDSJmKoymKcQWzj0ke7T0pFPU82tMXHCjIrpKWYasE="
    And I click on "Add" button
    And I click on privacy checkbox
    And I click on "Upload + index" button
    And I wait for 10 seconds
    Then upload video confirmation appears
    And I close the browser