package StepDef;

import StepDef.pages.loginPage;
import StepDef.pages.samplesPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;


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
        Assert.assertEquals("I did not find the button.", btnLabel, samplesPage.getUploadEnterURLLink().text());
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
}
