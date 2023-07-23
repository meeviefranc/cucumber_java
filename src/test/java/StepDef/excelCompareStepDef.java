package StepDef;

import CompareExcel.CompareExcel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.io.File;

import static org.junit.Assert.assertTrue;

public class excelCompareStepDef {

    public String xlsFolder;
    public String fileBaseline;
    public String fileCompare;
    public String fileResults;

    // set the working folder location
    @Given("^file folder is \"([^\"]*)\"$")
    public void fileDirIs(String userDir) throws Throwable {
        File f = new File(userDir);

        if (f.isDirectory()) {
            xlsFolder = userDir;
            System.out.println("Folder location is valid. Check your results here : " + xlsFolder);

        } else {
            // if the folder location in Given clause is not a valid folder, the Downloads folder will be used.
            // files to be compared should be in this folder.
            xlsFolder = System.getProperty("user.home") + "\\Downloads\\";
            f = new File(xlsFolder);
            if (f.isDirectory()) {
                System.out.println("Your folder location is not valid. The Downloads folder will be used instead : " + xlsFolder);
            } else {
                Assert.fail("Your folder location is not valid. Verify the directory argument in your Feature file.");
            }
        }
    }

    @When("^\"([^\"]*)\" report is \"([^\"]*)\"$")
    public void reportIs(String fileType, String fileName) throws Throwable {
        Assert.assertTrue("Set folder location for file using feature step \"Given file folder is...\" .", xlsFolder != null);
        File f = new File(xlsFolder + fileName);
        assertTrue("File does not exist : " + xlsFolder + fileName + ". Check if folder location or filename is correct.", f.isFile() && f.exists());
        if (fileType.equalsIgnoreCase("BASELINE")) {
            fileBaseline = xlsFolder + fileName;
            System.out.println("Baseline File : " + fileBaseline);
        } else {
            fileCompare = xlsFolder + fileName;
            fileResults = xlsFolder + "OUT_"+ fileName;
            System.out.println("Compare File : " + fileCompare);
        }
    }

    @Then("^\"([^\"]*)\" should match$")
    public void shouldMatch(String match) throws Throwable {
        // flag if files are not set up correctly
        Assert.assertTrue("Baseline file is not valid. Set the file using feature step \"BASELINE report is...\" . ", fileBaseline != null && !fileBaseline.isEmpty());
        Assert.assertTrue("Compare file is not valid. Set the file using feature step \"COMPARE report is...\" .", fileCompare != null && !fileCompare.isEmpty());

        switch (match) {
            case "number of sheets":
                CompareExcel.preChk(match, fileBaseline, fileCompare);
                break;
            case "number of rows/columns":
                CompareExcel.preChk(match, fileBaseline, fileCompare);
                break;
            case "content":
                CompareExcel.contentOfExcelFiles(fileBaseline, fileCompare, fileResults);
                break;
            default:
                Assert.fail("Choose to match by \"number of sheets\", \"number of rows\", \"number of columns\" or \"content\". Change this - " + match);
        }
    }

}
