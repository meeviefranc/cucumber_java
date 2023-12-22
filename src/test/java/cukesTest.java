import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
//        features = "src/test/resources/features/addAVideo.feature",
        features = "src/test/resources/features/videoInsight.feature",
//        features = "src/test/resources/features/searchVideo.feature",
        glue = "StepDef",
        strict = true,
        plugin = {"pretty",
                "html:target/cucumberReports/cucumber.html",
                "json:target/cucumberReports/cucumber.json"
        })

public class cukesTest {

}