$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/addAVideo.feature");
formatter.feature({
  "line": 1,
  "name": "Happy Path tests for AI Video Indexer",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "[1] Verify Upload screen",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer;[1]-verify-upload-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I login to videoindexer using google email",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user waits for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on Samples link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Upload button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user waits for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"Browse for files\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the \"Enter URL\" button",
  "keyword": "And "
});
formatter.match({
  "location": "addAVideoStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 12985845800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "addAVideoStepDef.userWaitsForSeconds(String)"
});
formatter.result({
  "duration": 10007393200,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 182329200,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 187731400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "addAVideoStepDef.userWaitsForSeconds(String)"
});
formatter.result({
  "duration": 10013311700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Browse for files",
      "offset": 18
    }
  ],
  "location": "addAVideoStepDef.iShouldSeeTheButton(String)"
});
formatter.result({
  "duration": 111582000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter URL",
      "offset": 18
    }
  ],
  "location": "addAVideoStepDef.iShouldSeeTheButton(String)"
});
formatter.result({
  "duration": 102132600,
  "status": "passed"
});
});