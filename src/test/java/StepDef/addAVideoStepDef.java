package StepDef;

import cucumber.api.java.en.Given;
import StepDef.pages.loginPage;


public class addAVideoStepDef extends commonStepDef {

    private loginPage loginPage;

    @Given("^I login to videoindexer using google email$")
    public void launchAndLogin() throws Throwable {
        loginPage page = new loginPage();
        launchurl();

    }
}
