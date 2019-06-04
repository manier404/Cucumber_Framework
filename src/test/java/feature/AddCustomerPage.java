package feature;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomerPage {

	
	

	@When("The User fill all the details")
	public void the_User_fill_all_the_details() {
		Hooks.launch.findElement(By.xpath("//label[text()='Done']")).click();
		Hooks.launch.findElement(By.id("fname")).sendKeys("Manivannan");
		Hooks.launch.findElement(By.id("lname")).sendKeys("Thamilselvan");
		Hooks.launch.findElement(By.id("email")).sendKeys("t.manier404@gmail.com");
		Hooks.launch.findElement(By.name("addr")).sendKeys("Thanjavur");
		Hooks.launch.findElement(By.id("telephoneno")).sendKeys("9894738299");

	}

	@When("The User Click Submit")
	public void the_User_Click_Submit() {
		Hooks.launch.findElement(By.xpath("(//input[@type='submit'])[1]")).click();
	}

	

}
