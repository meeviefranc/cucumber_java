$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/addAVideo.feature");
formatter.feature({
  "line": 1,
  "name": "Add a video",
  "description": "",
  "id": "add-a-video",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "## Test cases for user story 1"
    }
  ],
  "line": 4,
  "name": "[1] Login",
  "description": "",
  "id": "add-a-video;[1]-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I login to videoindexer using google email",
  "keyword": "Given "
});
formatter.match({
  "location": "addAVideoStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 14400975400,
  "status": "passed"
});
});