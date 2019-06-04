package feature;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;

public class AccessPage {
	@Then("The User should display with customer_id")
	public void the_User_should_display_with_customer_id() {
		Assert.assertTrue(Hooks.launch.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

	@Then("The user go to home page")
	public void the_user_go_to_home_page() {
		Hooks.launch.findElement(By.xpath("(//a[text()='Home'])[1]")).click();
	}
}
