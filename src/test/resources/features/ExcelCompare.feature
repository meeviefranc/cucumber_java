Feature: Compare excel files
## This is based my attempt on understanding how excel compare can work using this test framework

  Scenario: [1] Compare files
    # a copy of the files to be compared are in the folder resources/excelFiles. Place this file on a folder of your choice then update the following statement.
    Given file folder is "C:\Downloads\"
    When "BASELINE" report is "Baseline.xlsx"
    And "COMPARE" report is "BlankCells.xlsx"
    # use the following as pre-matching: no. of sheets/rows/cols, for a quick comp test with results displayed in console. Once they match, use content option for like vs like test.
    Then "number of sheets" should match
    And "number of rows/columns" should match
    # this statement compares the no of sheets/rows/cols, data type and data value in the excels and writes results in OUT_<compare filename>.xlsx
    And "content" should match
