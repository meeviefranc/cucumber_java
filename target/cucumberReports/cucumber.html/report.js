$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/searchVideo.feature");
formatter.feature({
  "line": 1,
  "name": "Happy Path tests for AI Video Indexer - Search Video",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---search-video",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "## happy path tests for ACs listed on User Story 3 - Search Video"
    }
  ],
  "line": 4,
  "name": "[1] Verify Search box",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---search-video;[1]-verify-search-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "## page displays a search box where a search can be entered and click search will perform query"
    }
  ],
  "line": 6,
  "name": "I login to videoindexer using google email",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Samples link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"ignite\" on the search box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press Enter on the search box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see \"Ignite 2016 - Keynote\" on search results",
  "keyword": "Then "
});
formatter.match({
  "location": "videoIndexerStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 26144486500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 11
    }
  ],
  "location": "videoIndexerStepDef.userWaitsForSeconds(String)"
});
formatter.result({
  "duration": 10008928000,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 168636000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 11
    }
  ],
  "location": "videoIndexerStepDef.userWaitsForSeconds(String)"
});
formatter.result({
  "duration": 10001514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ignite",
      "offset": 9
    }
  ],
  "location": "videoIndexerStepDef.iEnterOnTheSearchBox(String)"
});
formatter.result({
  "duration": 324660800,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iPressEnterOnTheSearchBox()"
});
formatter.result({
  "duration": 220631700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "videoIndexerStepDef.userWaitsForSeconds(String)"
});
formatter.result({
  "duration": 5002459000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ignite 2016 - Keynote",
      "offset": 14
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeOnSearchResults(String)"
});
formatter.result({
  "duration": 136178200,
  "status": "passed"
});
});