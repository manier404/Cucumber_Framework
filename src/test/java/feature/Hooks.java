package feature;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	static WebDriver launch;

	@Before
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Dell\\eclipse-workspace\\Selenium\\maven\\Cucumber\\Driver\\chromedriver.exe");
		launch = new ChromeDriver();
		launch.manage().window().maximize();
		launch.get("https://demo.guru99.com/telecom/");
	}

	@After
	public void closeBrowser() {
		launch.close();
		launch.quit();
	}
}
