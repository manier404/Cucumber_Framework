package feature;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTariffPlantoCustomer {
	

	@When("The User Enter the CustomerID {string}")
	public void the_User_Enter_the_CustomerID(String Customer_Id) {
		Hooks.launch.findElement(By.id("customer_id")).sendKeys(Customer_Id);

	}

	@When("The user will click the submit button")
	public void the_user_will_click_the_submit_button() {
		Hooks.launch.findElement(By.xpath("(//input[@type='submit'])[1]")).click();
	}

	@When("Select the tariff plan")
	public void select_the_tariff_plan() {

	}

	@Then("The user click AddTariffPlanToCustomer")
	public void the_user_click_AddTariffPlanToCustomer() {
		Hooks.launch.findElement(By.xpath("//input [@ value='Add Tariff Plan to Customer']")).click();
	}

	
	@Then("The user should see the Please Input Your Correct Customer ID")
	public void the_user_should_see_the_Please_Input_Your_Correct_Customer_ID() {
		Assert.assertTrue(Hooks.launch.findElement(By.xpath("//h4[text()='Please Input Your Correct Customer ID']"))
				.isDisplayed());
	}

}
