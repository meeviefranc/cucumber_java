$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/addAVideo.feature");
formatter.feature({
  "line": 1,
  "name": "Happy Path tests for AI Video Indexer - Add A Video",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---add-a-video",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "## happy path tests for ACs listed on User Story 1 - Add a Video"
    }
  ],
  "line": 4,
  "name": "[1] Verify Upload screen",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---add-a-video;[1]-verify-upload-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "## page allows selection of a file for uploading or the user can supply a url to a video for indexing"
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
  "name": "I click on Upload button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the \"Browse for files\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see the \"Enter URL\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "videoIndexerStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 22003282500,
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
  "duration": 10007685400,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 251171400,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 235486500,
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
  "duration": 10004902600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Browse for files",
      "offset": 18
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeTheButton(String)"
});
formatter.result({
  "duration": 99079100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter URL",
      "offset": 18
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeTheButton(String)"
});
formatter.result({
  "duration": 106711200,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iCloseTheBrowser()"
});
formatter.result({
  "duration": 1629068900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "[2] Verify Upload using Browse For files",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---add-a-video;[2]-verify-upload-using-browse-for-files",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "## video source language can be specific, page allows privacy to be set, advance options available"
    }
  ],
  "line": 17,
  "name": "I login to videoindexer using google email",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Samples link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Upload button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"Browse for files\" button to upload file \"GovTechImNotAValidVideo.txt\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "message \"File type is not supported\" appears in the upload pop up window",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "filename \"GovTechImNotAValidVideo\" is displayed in the filename textbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Danish\" in \"Video Source Language\" list box",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "\"Video Source Language\" listbox displays \"Danish\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "\"Privacy\" listbox displays \"Private\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Advanced settings link is available",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I leave Upload and Index page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "videoIndexerStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 22063026200,
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
  "duration": 10014557800,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 220571100,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 188559700,
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
  "duration": 10004602200,
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
  "location": "videoIndexerStepDef.iClickOnButton(String,String,String)"
});
formatter.result({
  "duration": 218092100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "File type is not supported",
      "offset": 9
    }
  ],
  "location": "videoIndexerStepDef.messageAppearsInTheUploadPopUpWindow(String)"
});
formatter.result({
  "duration": 55662600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTechImNotAValidVideo",
      "offset": 10
    }
  ],
  "location": "videoIndexerStepDef.filenameIsDisplayedInTheFilenameTextbox(String)"
});
formatter.result({
  "duration": 45048700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danish",
      "offset": 10
    },
    {
      "val": "Video Source Language",
      "offset": 22
    }
  ],
  "location": "videoIndexerStepDef.iSelectInListBox(String,String)"
});
formatter.result({
  "duration": 408365100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Source Language",
      "offset": 1
    },
    {
      "val": "Danish",
      "offset": 42
    }
  ],
  "location": "videoIndexerStepDef.listboxDisplays(String,String)"
});
formatter.result({
  "duration": 75455800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 1
    },
    {
      "val": "Private",
      "offset": 28
    }
  ],
  "location": "videoIndexerStepDef.listboxDisplays(String,String)"
});
formatter.result({
  "duration": 75813400,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.advanceSettingsLinkIsAvailable()"
});
formatter.result({
  "duration": 36723000,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnCancelButton()"
});
formatter.result({
  "duration": 118794700,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iLeaveUploadAndIndexPage()"
});
formatter.result({
  "duration": 115069700,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iCloseTheBrowser()"
});
formatter.result({
  "duration": 1271683900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "[3] Verify Upload using URL",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---add-a-video;[3]-verify-upload-using-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "## clicking upload button will start indexing process and notification is received once completed"
    }
  ],
  "line": 35,
  "name": "I login to videoindexer using google email",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Samples link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on Upload button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on \"Enter URL\" button to enter url \"https://media.istockphoto.com/id/1151597371/video/the-couple-with-camping-backpacks-walking-to-the-mountain-top-slow-motion.mp4?s\u003dmp4-640x640-is\u0026k\u003d20\u0026c\u003dXsDSJmKoymKcQWzj0ke7T0pFPU82tMXHCjIrpKWYasE\u003d\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I click on \"Add\" button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on privacy checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on \"Upload + index\" button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "upload video confirmation appears",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "videoIndexerStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 25380315300,
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
  "duration": 10005920600,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 199423200,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 226805800,
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
  "duration": 10007505200,
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
      "val": "https://media.istockphoto.com/id/1151597371/video/the-couple-with-camping-backpacks-walking-to-the-mountain-top-slow-motion.mp4?s\u003dmp4-640x640-is\u0026k\u003d20\u0026c\u003dXsDSJmKoymKcQWzj0ke7T0pFPU82tMXHCjIrpKWYasE\u003d",
      "offset": 44
    }
  ],
  "location": "videoIndexerStepDef.iClickOnButton(String,String,String)"
});
formatter.result({
  "duration": 913809700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 12
    }
  ],
  "location": "videoIndexerStepDef.iClickOnButton(String)"
});
formatter.result({
  "duration": 116317900,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnPrivacyCheckbox()"
});
formatter.result({
  "duration": 105065900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload + index",
      "offset": 12
    }
  ],
  "location": "videoIndexerStepDef.iClickOnButton(String)"
});
formatter.result({
  "duration": 943103500,
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
  "duration": 10001021700,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.uploadVideoConfirmationAppears()"
});
formatter.result({
  "duration": 130280500,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iCloseTheBrowser()"
});
formatter.result({
  "duration": 1043189600,
  "status": "passed"
});
});