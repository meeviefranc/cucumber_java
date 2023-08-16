package StepDef;

import StepDef.pages.loginPage;
import StepDef.pages.samplesPage;
import com.codeborne.selenide.Condition;
import cucumber.api.Format;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import util.appDateTime;

import java.io.File;
import java.time.Clock;
import java.time.ZoneId;
import java.util.Date;


public class videoIndexerStepDef extends commonStepDef {

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

    @And("^I wait for (\\d+) seconds$")
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

    @When("^I select \"([^\"]*)\" in \"([^\"]*)\" list box$")
    public void iSelectInListBox(String option, String lbox) throws Throwable {
        samplesPage page = new samplesPage();
        page.getVSLListBox().click();
        page.getVSLLangOption(option).click();
    }


    @Then("^\"([^\"]*)\" listbox displays \"([^\"]*)\"$")
    public void listboxDisplays(String lbox, String option) throws Throwable {
        samplesPage page = new samplesPage();
        if (lbox.equalsIgnoreCase("Video Source Language")) {
            Assert.assertEquals("Option selected did not match.", option, page.getVSLListBox().getText());
        } else {
            Assert.assertEquals("Option did not match.", option, page.getPrivacyOption().getText());
        }
    }

    @And("^Advanced settings link is available$")
    public void advanceSettingsLinkIsAvailable() throws Throwable {
       samplesPage page = new samplesPage();
       Assert.assertEquals("Advanced Settings not found.", "Advanced settings", page.getAdvSetting().getText());
    }

    @And("^I click on \"([^\"]*)\" button$")
    public void iClickOnButton(String btn) throws Throwable {
        samplesPage page = new samplesPage();
        if(btn.equalsIgnoreCase("Add")) {
            page.getAddBtn().click();
        } else {
            page.getUplIndex().click();
        }
    }

    @And("^I click on privacy checkbox$")
    public void iClickOnPrivacyCheckbox() throws Throwable {
        samplesPage page = new samplesPage();
        page.getPrivacyChkBox().click();
    }

    @Then("^upload video confirmation appears$")
    public void uploadVideoConfirmationAppears() throws Throwable {
        samplesPage page = new samplesPage();
        String expConfirm = page.getUplConfirm().waitUntil(Condition.appear, 15000).getText().trim();
        Assert.assertEquals("100 Percent upload confirmation cannot be found, please check.","100%", expConfirm);

    }

    @And("^I click on the \"([^\"]*)\" video$")
    public void iClickOnTheVideo(String vidTitle) throws Throwable {
        samplesPage page = new samplesPage();
        page.getVidLink(vidTitle).click();
    }

    @Then("^I should see the player for the video$")
    public void iShouldSeeThePlayerForTheVideo() throws Throwable {
        samplesPage page = new samplesPage();
        Assert.assertTrue("Video player for selected video not found.",page.getVidPlayer().waitUntil(Condition.appear, 15000).isDisplayed());
    }

    @And("^I should see \"([^\"]*)\" on \"([^\"]*)\" insight$")
    public void iShouldSeeOnInsight(String expText, String component) throws Throwable {
        samplesPage page = new samplesPage();

        String actText = page.getVidComponent(component).text().trim();
        Assert.assertTrue("Text did not match.", actText.contains(expText));
    }

    @Given("^day is (.+)$")
    public void dayIsSep(@Format("dd-MMM-yy") Date newDate) throws Throwable {
        appDateTime.setToCustomClock(Clock.fixed(newDate.toInstant(), ZoneId.systemDefault()));
    }


    @And("^go back to orig date$")
    public void goBackToOrigDate() {
        appDateTime.resetToDefaultClock();
    }

    @And("^I enter \"([^\"]*)\" on the search box$")
    public void iEnterOnTheSearchBox(String keyword) throws Throwable {
        samplesPage page = new samplesPage();
        page.getSearchBox().setValue(keyword);
    }

    @And("^I press Enter on the search box$")
    public void iPressEnterOnTheSearchBox() throws Throwable {
        samplesPage page = new samplesPage();
        page.getSearchBox().pressEnter();
    }

    @Then("^I should see \"([^\"]*)\" on search results$")
    public void iShouldSeeOnSearchResults(String vidTitle) throws Throwable {
        samplesPage page = new samplesPage();
        Assert.assertEquals("Video not found.", page.getSearchResult().text(), vidTitle);
    }
}
