import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/addAVideo.feature",
        glue= "StepDef",
        strict = true,
        plugin = {"pretty",
                "html:target/cucumberReports/cucumber.html",
                "json:target/cucumberReports/cucumber.json"
        })

public class cukesTest {

}