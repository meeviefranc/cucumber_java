package StepDef;

import StepDef.pages.loginPage;
import com.codeborne.selenide.WebDriverRunner;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Properties;

import static com.codeborne.selenide.Selenide.open;

public class commonStepDef {

    private loginPage loginPage;

    public void launchurl() throws Throwable {
        // get login setup from properties file
        String url = getProps("testurl");
        String username = getProps("username");
        String pwd = getProps("password");
        String cdriver = getProps("chromedriver");
        String vfolder = getProps("vidfolder");

        // launch url
        loginPage page = new loginPage();
        System.setProperty("webdriver.chrome.driver", cdriver);
        ChromeOptions options = new ChromeOptions();
        HashMap<String, Object> chromePref = new HashMap<>();
        chromePref.put("download.default_directory", vfolder);
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, options);
        WebDriver driver = new ChromeDriver(options);
        driver.manage().window().maximize();
        WebDriverRunner.setWebDriver(driver);
        WebDriverRunner.clearBrowserCache();
        open(url);

        // login
        page.getGoogleBtn().click();
        page.setUserName(username);
        page.getUsernameNext().click();
        page.setPassword(pwd);
        page.getpwdNext().click();
    }

    public String getProps(String propname) throws IOException {
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\test\\resources\\cucumber.properties"));
        String propvalue = null;
        switch (propname) {
            case "testurl":
                propvalue = properties.getProperty("testurl");
                break;
            case "username":
                propvalue = properties.getProperty("username");
                break;
            case "password":
                propvalue = properties.getProperty("password");
                break;
            case "chromedriver":
                propvalue = properties.getProperty("chromedriver");
                break;
            case "vidfolder":
                propvalue = properties.getProperty("vidfolder");
                break;
            default:
                break;
        }
        return propvalue;
    }

    public void closeurl() {
        WebDriverRunner.closeWebDriver();
    }
}
