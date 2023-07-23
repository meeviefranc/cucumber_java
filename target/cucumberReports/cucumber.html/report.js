$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExcelCompare.feature");
formatter.feature({
  "line": 1,
  "name": "Compare excel files",
  "description": "",
  "id": "compare-excel-files",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "[1] Compare files",
  "description": "",
  "id": "compare-excel-files;[1]-compare-files",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "file folder is \"C:\\Users\\Mother Of Dragons\\Downloads\\IJ_ExcelCompare\\\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "\"BASELINE\" report is \"Baseline.xlsx\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    And \"COMPARE\" report is \"Match.xlsx\""
    },
    {
      "line": 7,
      "value": "#    And \"COMPARE\" report is \"MissSheet.xlsx\""
    },
    {
      "line": 8,
      "value": "#    And \"COMPARE\" report is \"NotMatch.xlsx\""
    },
    {
      "line": 9,
      "value": "#    And \"COMPARE\" report is \"RowsMissing1.xlsx\""
    },
    {
      "line": 10,
      "value": "#    And \"COMPARE\" report is \"RowsMissing2.xlsx\""
    },
    {
      "line": 11,
      "value": "#    And \"COMPARE\" report is \"ColsMissing1.xlsx\""
    },
    {
      "line": 12,
      "value": "#    And \"COMPARE\" report is \"ColsMissing2.xlsx\""
    },
    {
      "line": 13,
      "value": "#    And \"COMPARE\" report is \"BlankRow.xlsx\""
    }
  ],
  "line": 14,
  "name": "\"COMPARE\" report is \"BlankCells.xlsx\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "# use the following as pre-matching: no. of sheets/rows/cols, for a quick comp test with results displayed in console. Once they match, use content option for like vs like test."
    }
  ],
  "line": 16,
  "name": "\"number of sheets\" should match",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\"number of rows/columns\" should match",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "# this statement compares the no of sheets/rows/cols, data type and data value in the excels and writes results in OUT_\u003ccompare filename\u003e.xlsx"
    }
  ],
  "line": 19,
  "name": "\"content\" should match",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\Mother Of Dragons\\Downloads\\IJ_ExcelCompare\\",
      "offset": 16
    }
  ],
  "location": "excelCompareStepDef.fileDirIs(String)"
});
formatter.result({
  "duration": 142512300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BASELINE",
      "offset": 1
    },
    {
      "val": "Baseline.xlsx",
      "offset": 22
    }
  ],
  "location": "excelCompareStepDef.reportIs(String,String)"
});
formatter.result({
  "duration": 1973400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPARE",
      "offset": 1
    },
    {
      "val": "BlankCells.xlsx",
      "offset": 21
    }
  ],
  "location": "excelCompareStepDef.reportIs(String,String)"
});
formatter.result({
  "duration": 447500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number of sheets",
      "offset": 1
    }
  ],
  "location": "excelCompareStepDef.shouldMatch(String)"
});
formatter.result({
  "duration": 955703500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number of rows/columns",
      "offset": 1
    }
  ],
  "location": "excelCompareStepDef.shouldMatch(String)"
});
formatter.result({
  "duration": 62817300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content",
      "offset": 1
    }
  ],
  "location": "excelCompareStepDef.shouldMatch(String)"
});
formatter.result({
  "duration": 206632500,
  "error_message": "java.lang.AssertionError: Data not matching found and marked as \"Not Matched\" in C:\\Users\\Mother Of Dragons\\Downloads\\OUT_BlankCells.xlsx ! \r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat CompareExcel.CompareExcel.contentOfExcelFiles(CompareExcel.java:198)\r\n\tat StepDef.excelCompareStepDef.shouldMatch(excelCompareStepDef.java:71)\r\n\tat ✽.And \"content\" should match(ExcelCompare.feature:19)\r\n",
  "status": "failed"
});
});