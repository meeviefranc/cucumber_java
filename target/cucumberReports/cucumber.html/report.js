$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/addAVideo.feature");
formatter.feature({
  "line": 1,
  "name": "Happy Path tests for AI Video Indexer",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "[2] Verify Upload using Browse For files",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer;[2]-verify-upload-using-browse-for-files",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I login to videoindexer using google email",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user waits for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Samples link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Upload button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user waits for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Browse for files\" button to upload file \"GovTechImNotAValidVideo.txt\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "message \"File type is not supported\" appears in the upload pop up window",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "filename \"GovTechImNotAValidVideo\" is displayed in the filename textbox",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I leave Upload and Index page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Upload button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user waits for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"Enter URL\" button to enter url \"https://www.videoindexer.ai/accounts/00000000-0000-0000-0000-000000000000/videos/c19ab92882\"",
  "keyword": "And "
});
formatter.match({
  "location": "addAVideoStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 12199034600,
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
  "duration": 10018562800,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 167912000,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 199251800,
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
  "duration": 10009484600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Browse for files",
      "offset": 12
    },
    {
      "val": "upload file",
      "offset": 40
    },
    {
      "val": "GovTechImNotAValidVideo.txt",
      "offset": 53
    }
  ],
  "location": "addAVideoStepDef.iClickOnButton(String,String,String)"
});
formatter.result({
  "duration": 201868800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "File type is not supported",
      "offset": 9
    }
  ],
  "location": "addAVideoStepDef.messageAppearsInTheUploadPopUpWindow(String)"
});
formatter.result({
  "duration": 51242000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTechImNotAValidVideo",
      "offset": 10
    }
  ],
  "location": "addAVideoStepDef.filenameIsDisplayedInTheFilenameTextbox(String)"
});
formatter.result({
  "duration": 52271600,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnCancelButton()"
});
formatter.result({
  "duration": 112831200,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iLeaveUploadAndIndexPage()"
});
formatter.result({
  "duration": 111887900,
  "status": "passed"
});
formatter.match({
  "location": "addAVideoStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 125023900,
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
  "duration": 10002134600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter URL",
      "offset": 12
    },
    {
      "val": "enter url",
      "offset": 33
    },
    {
      "val": "https://www.videoindexer.ai/accounts/00000000-0000-0000-0000-000000000000/videos/c19ab92882",
      "offset": 44
    }
  ],
  "location": "addAVideoStepDef.iClickOnButton(String,String,String)"
});
formatter.result({
  "duration": 527784400,
  "status": "passed"
});
});