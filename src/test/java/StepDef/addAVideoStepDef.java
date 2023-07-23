package StepDef;

import StepDef.pages.loginPage;
import StepDef.pages.samplesPage;
import com.codeborne.selenide.Condition;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.io.File;


public class addAVideoStepDef extends commonStepDef {

    private loginPage loginPage;
    private samplesPage samplesPage;

    @Given("^I login to videoindexer using google email$")
    public void launchAndLogin() throws Throwable {
        loginPage page = new loginPage();
        launchurl();

    }

    @And("^I click on Samples link$")
    public void iClickOnSamplesLink() throws Throwable {
        samplesPage page = new samplesPage();
        page.getSampleLink().click();
    }

    @And("^I click on Upload button$")
    public void iClickOnUploadButton() throws Throwable {
        samplesPage page = new samplesPage();
        page.getUploadLink().click();
    }

    @Then("^I should see the \"([^\"]*)\" button$")
    public void iShouldSeeTheButton(String btnLabel) throws Throwable {
        samplesPage page = new samplesPage();
        if (btnLabel.equalsIgnoreCase("Enter URL")) {
            Assert.assertEquals("I did not find the button.", btnLabel, page.getUploadEnterURLLink().waitUntil(Condition.appear, 15000).text());
        } else {
            Assert.assertEquals("I did not find the button.", btnLabel, page.getBrowseFileLink().waitUntil(Condition.appear, 15000).text());
        }
    }

    @And("^user waits for (\\d+) seconds$")
    public void userWaitsForSeconds(String second) throws Throwable {
        long milliseconds = Integer.parseInt(second) * 1000;
        try {
            Thread.sleep(milliseconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @And("^I click on \"([^\"]*)\" button to (upload file|enter url) \"([^\"]*)\"$")
    public void iClickOnButton(String btnLabel, String action, String fName) throws Throwable {
        samplesPage page = new samplesPage();
        if (action.equalsIgnoreCase("upload file")) {
            File targetFile = new File(getProps("vidfolder") + fName);
            page.getBrowseFileUpload().uploadFile(targetFile);
        } else {
            page.getUploadEnterURLLink().click();
            page.getURLDisplayed().setValue(fName);
        }
    }

    @And("^I close the browser$")
    public void iCloseTheBrowser() throws Throwable {
        closeurl();
    }

    @Then("^message \"([^\"]*)\" appears in the upload pop up window$")
    public void messageAppearsInTheUploadPopUpWindow(String expMsg) throws Throwable {
        samplesPage page = new samplesPage();
        Assert.assertEquals("File Validation message does not match.", expMsg, page.getFileValMsg().text());
    }

    @And("^I click on Cancel button$")
    public void iClickOnCancelButton() throws Throwable {
        samplesPage page = new samplesPage();
        page.getCancelBtn().click();
    }

    @And("^I leave Upload and Index page$")
    public void iLeaveUploadAndIndexPage() throws Throwable {
        samplesPage page = new samplesPage();
        page.getLeaveBtn().click();
    }

    @And("^filename \"([^\"]*)\" is displayed in the filename textbox$")
    public void filenameIsDisplayedInTheFilenameTextbox(String fName) throws Throwable {
        samplesPage page = new samplesPage();
        Assert.assertEquals("Filename displayed does not match.", fName, page.getFNameDisplayed().getValue());
    }
}
