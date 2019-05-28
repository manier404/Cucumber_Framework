package feature;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddCustomer {
	static WebDriver launch;
	
	@Given("The User is in telecome home page")
	public void the_User_is_in_telecome_home_page() {
	 System.setProperty("webdriver.chrome.driver", "C:\\Users\\Dell\\eclipse-workspace\\Selenium\\maven\\Cucumber\\Driver\\chromedriver.exe");
		launch = new ChromeDriver();  
		launch.manage().window().maximize();
		launch.get("https://demo.guru99.com/telecom/");
	}

	@Given("The User click on addcustomer")
	public void the_User_click_on_addcustomer() {
	    launch.findElement(By.xpath("(//a [text()='Add Customer'])[1]")).click();
	}

	@When("The User fill all the details")
	public void the_User_fill_all_the_details() {
	    launch.findElement(By.xpath("//label[text()='Done']")).click();
	    launch.findElement(By.id("fname")).sendKeys("Manivannan");
	    launch.findElement(By.id("lname")).sendKeys("Thamilselvan");
	    launch.findElement(By.id("email")).sendKeys("t.manier404@gmail.com");
	    launch.findElement(By.name("addr")).sendKeys("Thanjavur");
	    launch.findElement(By.id("telephoneno")).sendKeys("894738299");
	    
	}

	@When("The User Click Submit")
	public void the_User_Click_Submit() {
		launch.findElement(By.xpath("(//input[@type='submit'])[1]")).click();
	}

	@Then("The User should display with customer_id")
	public void the_User_should_display_with_customer_id() {
	 Assert.assertTrue( launch.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}



}
