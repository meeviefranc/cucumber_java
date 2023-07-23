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
  "name": "I should see the \"Enter URL\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "addAVideoStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 12025681100,
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
  "duration": 10013875400,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 179447900,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 175064400,
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
  "duration": 10005215700,
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
  "duration": 1135700,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDef.addAVideoStepDef.iShouldSeeTheButton(addAVideoStepDef.java:38)\r\n\tat ✽.Then I should see the \"Enter URL\" button(src/test/resources/features/addAVideo.feature:9)\r\n",
  "status": "failed"
});
});