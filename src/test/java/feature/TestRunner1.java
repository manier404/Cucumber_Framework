package feature;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src/test/resources/failed.txt", glue = "feature", plugin = {
		"rerun:src/test/resources/failed1.txt", "html:target" })
public class TestRunner1 {

}
