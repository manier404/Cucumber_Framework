package feature;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;

public class InsertPage {
	@Then("The user should see the msg Congratulation Tariff Plan assigned")
	public void the_user_should_see_the_msg_Congratulation_Tariff_Plan_assigned() {
		Assert.assertTrue(
				Hooks.launch.findElement(By.xpath("//h2[text()='Congratulation Tariff Plan assigned']")).isDisplayed());
	}

}
