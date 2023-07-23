package StepDef;

import StepDef.pages.loginPage;
import com.codeborne.selenide.WebDriverRunner;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.stereotype.Component;

import java.util.HashMap;

import static com.codeborne.selenide.Selenide.open;

@Component
public class commonStepDef {

    private String url = "https://videoindexer.ai/";

    private String username = "MVGovTechExam23@gmail.com";

    private String pwd = "videoanalytics101";

    private String cdriver = "C:\\chromedriver\\chromedriver.exe";

    private String vfolder = "C:\\testvid";

    private String vulr = "https://www.videoindexer.ai/accounts/00000000-0000-0000-0000-000000000000/videos/c19ab92882";

    private loginPage loginPage;

    public void launchurl() throws Throwable {
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
        page.getGoogleBtn().click();
        page.setUserName(username);
        page.getUsernameNext().click();
        page.setPassword(pwd);
        page.getpwdNext().click();
    }


}
