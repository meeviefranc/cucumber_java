package CompareExcel;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.*;
import org.junit.Assert;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class CompareExcel {

    public static Integer rRow = 1;

    public static CompareExcel compareExcel = new CompareExcel();

    public static void preChk(String chk, String fileBaseline, String fileCompare) throws Throwable {
        Workbook wb1 = WorkbookFactory.create(new File(fileBaseline));
        Workbook wb2 = WorkbookFactory.create(new File(fileCompare));

        if (chk.equalsIgnoreCase("number of sheets")) {
            compareNoOfSheets(wb1, wb2);
        } else {
            compareNoOfRowsCols(wb1, wb2, false);
        }

        wb1.close();
        wb2.close();
    }

    public static void writeResult(Sheet sOutRes, String message) {
        XSSFRow resRow = (XSSFRow) sOutRes.createRow(rRow);
        XSSFCell resCell = resRow.createCell(0);
        resCell.setCellValue(message);
        rRow++;
        System.out.println(message);
    }

    public static void contentOfExcelFiles(String fileBaseline, String fileCompare, String fileResults) throws Throwable {

        Boolean dataMatch = true;
        Workbook workbook1 = WorkbookFactory.create(new File(fileBaseline));
        Workbook workbook2 = WorkbookFactory.create(new File(fileCompare));

        //continue only if no. of sheets are matching between the files
        compareNoOfSheets(workbook1, workbook2);

        //create results file and set highlight to yellow for mismatches
        Workbook wbOut = new XSSFWorkbook();
        XSSFCellStyle tCs = (XSSFCellStyle) wbOut.createCellStyle();
        tCs.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        tCs.setFillForegroundColor(IndexedColors.YELLOW.getIndex());
        Sheet sOutRes = wbOut.createSheet("TestResults");
        sOutRes.setDisplayGridlines(false);

        //continue matching content even if Rows did not match - to flag where the mismatch starts
        String checkRows = "";
        if (compareNoOfRowsCols(workbook1, workbook2, true)) {
            checkRows = "Check the row difference too in step \"number of rows/columns should match\"....";
        }

        System.out.println("Verifying if both work books have same data.............");

        writeResult(sOutRes, "Baseline File : " + fileBaseline);
        writeResult(sOutRes, "Compare File : " + fileCompare);
        writeResult(sOutRes, "Results File : " + fileResults);

        int sheetCounts = workbook1.getNumberOfSheets();

        for (int i = 0; i < sheetCounts; i++) {

            Sheet s1 = workbook1.getSheetAt(i);
            Sheet s2 = workbook2.getSheetAt(i);
            writeResult(sOutRes, "*********** Sheet Name : " + s1.getSheetName() + "*************");

            //create same sheet in results file
            Sheet sOut = wbOut.createSheet(s2.getSheetName());

            int rowCounts = s1.getPhysicalNumberOfRows();
            for (int j = 0; j < rowCounts; j++) {

                //skip matching empty rows, just flag where row is empty in one file but has value in another
                if (s1.getRow(j) == null) {
                    Assert.assertTrue(String.format("This row is blank in Baseline file but not in Compare file : Sheet %s > Row %d . %s", s1.getSheetName(), j+1, checkRows), s2.getRow(j) == null);
                    writeResult(sOutRes, String.format("Skipping matching on blank row in Sheet %s > Row %d. %s", s1.getSheetName(), j+1, checkRows));
                    continue;
                }

                int cellCounts = s1.getRow(j).getPhysicalNumberOfCells();

                XSSFRow newRow = (XSSFRow) sOut.createRow(j);

                for (int k = 0; k < cellCounts; k++) {

                    Cell c1 = s1.getRow(j).getCell(k);
                    Cell c2 = s2.getRow(j).getCell(k);

                    //copy Compare File Row in Result file
                    XSSFCell newCell = newRow.createCell(k);

                    // skip matching empty cells, just flag where the value is empty in one file but has value in another
                    if (c1 == null || c1.getCellType() == CellType.BLANK) {
                        if (c2 == null || c2.getCellType() == CellType.BLANK) {
                            writeResult(sOutRes, String.format("Skipping matching on blank cell in Sheet %s > Cell %s . %s", s2.getSheetName(), c2.getAddress(), checkRows));
                        } else {
                            writeResult(sOutRes, String.format("This cell is empty in Baseline file but not in Compare File : Sheet %s > Cell %s . %s", s2.getSheetName(), c2.getAddress(), checkRows));
                            newCell.setCellStyle(tCs);
                            dataMatch = false;
                        }
                        continue;
                    } else {
                        if (c2 == null || c2.getCellType() == CellType.BLANK) {
                            writeResult(sOutRes, String.format("This cell is empty in Compare file but not in Baseline : Sheet %s > Cell %s . %s", s2.getSheetName(), c2.getAddress(), checkRows));
                            newCell.setCellStyle(tCs);
                            dataMatch = false;
                            continue;
                        }
                    }

                    // match for type and data
                    if (c1.getCellType().equals(c2.getCellType())) {
                        if (c1.getCellType() == CellType.STRING) {
                            String v1 = c1.getStringCellValue();
                            String v2 = c2.getStringCellValue();
                            // Assert.assertEquals(String.format("Cell %s values are different..... %s ", c1.getAddress(), checkRows), v1, v2);
                            newCell.setCellValue(v2);
                            if (v1.equals(v2)) {
                                writeResult(sOutRes, String.format("%s Matched : %s == %s%n", c1.getAddress(), v1, v2));
                            } else {
                                writeResult(sOutRes, String.format("%s Not Matched : %s <> %s%n", c1.getAddress(), v1, v2));
                                newCell.setCellStyle(tCs);
                                dataMatch = false;
                            }

                        } else if (c1.getCellType() == CellType.NUMERIC) {

                            if (DateUtil.isCellDateFormatted(c1) | DateUtil.isCellDateFormatted(c2)) {
                                DataFormatter df = new DataFormatter();
                                String v1 = df.formatCellValue(c1);
                                String v2 = df.formatCellValue(c2);
                                // Assert.assertEquals(String.format("Cell %s values are different..... %s ", c1.getAddress(), checkRows), v1, v2);
                                newCell.setCellValue(v2);
                                if (v1.equals(v2)) {
                                    writeResult(sOutRes, String.format("%s Matched : %s == %s%n", c1.getAddress(), v1, v2));
                                } else {
                                    writeResult(sOutRes, String.format("%s Not Matched : %s <> %s%n", c1.getAddress(), v1, v2));
                                    newCell.setCellStyle(tCs);
                                    dataMatch = false;
                                }
                            } else {
                                double v1 = c1.getNumericCellValue();
                                double v2 = c2.getNumericCellValue();
                                // Assert.assertTrue(String.format("Cell %s values are different..... %s ", c1.getAddress(), checkRows), v1 == v2);
                                newCell.setCellValue(v2);
                                if (v1 == v2) {
                                    writeResult(sOutRes, String.format("%s Matched : %s == %s%n", c1.getAddress(), v1, v2));
                                } else {
                                    writeResult(sOutRes, String.format("%s Not Matched : %s <> %s%n", c1.getAddress(), v1, v2));
                                    newCell.setCellStyle(tCs);
                                    dataMatch = false;
                                }
                            }

                        } else if (c1.getCellType() == CellType.BOOLEAN) {
                            boolean v1 = c1.getBooleanCellValue();
                            boolean v2 = c2.getBooleanCellValue();
                            // Assert.assertEquals(String.format("Cell %s values are different..... %s ", c1.getAddress(), checkRows), v1, v2);
                            newCell.setCellValue(v2);
                            if (v1 == v2) {
                                writeResult(sOutRes, String.format("%s Matched : %s == %s%n", c1.getAddress(), v1, v2));
                            } else {
                                writeResult(sOutRes, String.format("%s Not Matched : %s <> %s%n", c1.getAddress(), v1, v2));
                                newCell.setCellStyle(tCs);
                                dataMatch = false;
                            }
                        }
                    } else {
                        // Assert.fail("Non matching cell type.");
                        writeResult(sOutRes, String.format("%s Non matching cell type : %s <> %s%n", c1.getAddress(), c1.getCellType(), c2.getCellType()));
                        DataFormatter df = new DataFormatter();
                        newCell.setCellValue(df.formatCellValue(c2));
                        newCell.setCellStyle(tCs);
                        dataMatch = false;
                    }
                }
            }
        }
        System.out.println(String.format("Check the file %s for the comparison results.", fileResults));
        FileOutputStream out = null;
        out = new FileOutputStream(fileResults);
        wbOut.write(out);
        out.close();
        workbook1.close();
        workbook2.close();
        Assert.assertTrue(String.format("Data not matching found and marked as \"Not Matched\" in %s ! ", fileResults),dataMatch);
    }

    public static void compareNoOfSheets(Workbook workbook1, Workbook workbook2) {
        System.out.println("Verifying if both work books have same number of sheets.............");

        int sheetsInWorkbook1 = workbook1.getNumberOfSheets();
        int sheetsInWorkbook2 = workbook2.getNumberOfSheets();

        Assert.assertEquals("Excel work books have different number of sheets. \n " + "Sheets in work book 1 : " + sheetsInWorkbook1 + "\n " + "Number of sheets in work book 2 : " + sheetsInWorkbook2, sheetsInWorkbook1, sheetsInWorkbook2);

        System.out.println("Sheets in first work book : " + sheetsInWorkbook1);
        System.out.println("Sheets in second work book : " + sheetsInWorkbook2);
        System.out.println("Both work books have same number of sheets.........................");


        System.out.println("Verifying if both work books have same name of sheets.............");
        List<String> sheetsNameOfWb1 = new ArrayList<>();
        List<String> sheetsNameOfWb2 = new ArrayList<>();

        for (int i = 0; i < sheetsInWorkbook1; i++) {

            sheetsNameOfWb1.add(workbook1.getSheetName(i));
            sheetsNameOfWb2.add(workbook2.getSheetName(i));
        }

        Collections.sort(sheetsNameOfWb1);
        Collections.sort(sheetsNameOfWb2);

        Assert.assertEquals("Provided excel work books have different name of sheets.", sheetsNameOfWb1, sheetsNameOfWb2);
        System.out.println("Sheet Names in first work book : " + sheetsNameOfWb1);
        System.out.println("Sheet Names in second work book : " + sheetsNameOfWb2);
        System.out.println("Both work books have same name of sheets.........................");
    }

    public static boolean compareNoOfRowsCols(Workbook workbook1, Workbook workbook2, Boolean skipRowAssert) {
        boolean rowsNotMatch = false;
        System.out.println("Verifying if both work books have same number of rows and columns in all sheets.............");
        int sheetCounts = workbook1.getNumberOfSheets();
        for (int i = 0; i < sheetCounts; i++) {
            Sheet s1 = workbook1.getSheetAt(i);
            Sheet s2 = workbook2.getSheetAt(i);
            int rowsInSheet1 = s1.getPhysicalNumberOfRows();
            int rowsInSheet2 = s2.getPhysicalNumberOfRows();
            System.out.println(String.format("No. of rows match in %s - total rows in Baseline : %d total rows in Compare: %d", workbook1.getSheetName(i), rowsInSheet1, rowsInSheet2));
            if (rowsInSheet1 != rowsInSheet2) {
                if (skipRowAssert) {
                    // assertion failure is skipped to attempt to compare data and flag where the missing row is.
                    rowsNotMatch = true;
                } else {
                    Assert.assertEquals("Check " + workbook1.getSheetName(i) + " - Sheets have different count of rows..", rowsInSheet1, rowsInSheet2);
                }
            } else {
                // if no. of rows match, verify no. of columns too
                Iterator<Row> rowInSheet1 = s1.rowIterator();
                Iterator<Row> rowInSheet2 = s2.rowIterator();
                while (rowInSheet1.hasNext()) {
                    int cellCounts1 = rowInSheet1.next().getPhysicalNumberOfCells();
                    int cellCounts2 = rowInSheet2.next().getPhysicalNumberOfCells();
                    Assert.assertEquals("Check " + workbook1.getSheetName(i) + " - Sheets have different count of columns..", cellCounts1, cellCounts2);
                }
            }
        }
        return rowsNotMatch;
    }

}
