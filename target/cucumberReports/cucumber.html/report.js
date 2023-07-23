$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addAVideo.feature");
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
  "duration": 18706208100,
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
  "duration": 10016513900,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 178490800,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 184811600,
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
  "duration": 10009946400,
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
  "duration": 94782000,
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
  "duration": 83915600,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iCloseTheBrowser()"
});
formatter.result({
  "duration": 672817500,
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
  "duration": 19993937000,
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
  "duration": 10001218600,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 185520000,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 184677800,
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
  "duration": 10010495100,
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
  "duration": 174261600,
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
  "duration": 58786000,
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
  "duration": 56311800,
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
  "duration": 310374200,
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
  "duration": 41752000,
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
  "duration": 50901200,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.advanceSettingsLinkIsAvailable()"
});
formatter.result({
  "duration": 45248200,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnCancelButton()"
});
formatter.result({
  "duration": 109621300,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iLeaveUploadAndIndexPage()"
});
formatter.result({
  "duration": 139322600,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iCloseTheBrowser()"
});
formatter.result({
  "duration": 729876500,
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
  "duration": 17623174000,
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
  "duration": 10011013800,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 172579900,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnUploadButton()"
});
formatter.result({
  "duration": 184043000,
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
  "duration": 10001645300,
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
  "duration": 796214900,
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
  "duration": 156431100,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnPrivacyCheckbox()"
});
formatter.result({
  "duration": 102972500,
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
  "duration": 551947400,
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
  "duration": 10003352900,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.uploadVideoConfirmationAppears()"
});
formatter.result({
  "duration": 127949800,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iCloseTheBrowser()"
});
formatter.result({
  "duration": 713270200,
  "status": "passed"
});
formatter.uri("videoInsight.feature");
formatter.feature({
  "line": 1,
  "name": "Happy Path tests for AI Video Indexer - Video Insight",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---video-insight",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "## happy path tests for ACs listed on User Story 2 - Video Insight"
    }
  ],
  "line": 4,
  "name": "[1] Verify Insights available for a video",
  "description": "",
  "id": "happy-path-tests-for-ai-video-indexer---video-insight;[1]-verify-insights-available-for-a-video",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "## page has insight sections : people, topics, audio effects, keywords, labels, named entities"
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
  "name": "I click on the \"Ignite 2016 - Keynote\" video",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the player for the video",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see \"73 people\" on \"People\" insight",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see \"4 topics\" on \"Topic\" insight",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"4 audio effects\" on \"Audio Effects\" insight",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see \"30 keywords\" on \"Keywords\" insight",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"227 labels\" on \"Labels\" insight",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see \"126 named entities\" on \"Named Entities\" insight",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "videoIndexerStepDef.launchAndLogin()"
});
formatter.result({
  "duration": 17162722000,
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
  "duration": 10011841500,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iClickOnSamplesLink()"
});
formatter.result({
  "duration": 175807300,
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
  "duration": 10011012600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ignite 2016 - Keynote",
      "offset": 16
    }
  ],
  "location": "videoIndexerStepDef.iClickOnTheVideo(String)"
});
formatter.result({
  "duration": 151301600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    }
  ],
  "location": "videoIndexerStepDef.userWaitsForSeconds(String)"
});
formatter.result({
  "duration": 20006003500,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iShouldSeeThePlayerForTheVideo()"
});
formatter.result({
  "duration": 120712300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "73 people",
      "offset": 14
    },
    {
      "val": "People",
      "offset": 29
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeOnInsight(String,String)"
});
formatter.result({
  "duration": 126880600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 topics",
      "offset": 14
    },
    {
      "val": "Topic",
      "offset": 28
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeOnInsight(String,String)"
});
formatter.result({
  "duration": 85375500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 audio effects",
      "offset": 14
    },
    {
      "val": "Audio Effects",
      "offset": 35
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeOnInsight(String,String)"
});
formatter.result({
  "duration": 63946400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30 keywords",
      "offset": 14
    },
    {
      "val": "Keywords",
      "offset": 31
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeOnInsight(String,String)"
});
formatter.result({
  "duration": 56835900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "227 labels",
      "offset": 14
    },
    {
      "val": "Labels",
      "offset": 30
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeOnInsight(String,String)"
});
formatter.result({
  "duration": 80021900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126 named entities",
      "offset": 14
    },
    {
      "val": "Named Entities",
      "offset": 38
    }
  ],
  "location": "videoIndexerStepDef.iShouldSeeOnInsight(String,String)"
});
formatter.result({
  "duration": 92354700,
  "status": "passed"
});
formatter.match({
  "location": "videoIndexerStepDef.iCloseTheBrowser()"
});
formatter.result({
  "duration": 711663700,
  "status": "passed"
});
});