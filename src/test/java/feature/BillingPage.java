package feature;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BillingPage {
	@Given("The User click the PayBilling")
	public void the_User_click_the_PayBilling() {
		Hooks.launch.findElement(By.xpath("(//a[text()='Pay Billing'])[1]")).click();
	   
	}

	@Then("The user should see the Total Bill")
	public void the_user_should_see_the_Total_Bill() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}
}
