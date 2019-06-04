package feature;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTariffPlanPage {

	
	

	@When("The User fill all the value details")
	public void the_User_fill_all_the_value_details(DataTable TariffPlans) {

		Map<String, String> TariffPlansDetails = TariffPlans.asMap(String.class, String.class);
		System.out.println(TariffPlansDetails);

		Hooks.launch.findElement(By.id("rental1")).sendKeys(TariffPlansDetails.get("Monthly_Rental"));
		Hooks.launch.findElement(By.id("local_minutes")).sendKeys(TariffPlansDetails.get("Free_Local_Minutes"));
		Hooks.launch.findElement(By.id("inter_minutes")).sendKeys(TariffPlansDetails.get("Free_international_Minutes"));
		Hooks.launch.findElement(By.id("sms_pack")).sendKeys(TariffPlansDetails.get("Free_SMS_Pack"));
		Hooks.launch.findElement(By.id("minutes_charges"))
				.sendKeys(TariffPlansDetails.get("Local_Per_Minutes_Charges"));
		Hooks.launch.findElement(By.id("inter_charges"))
				.sendKeys(TariffPlansDetails.get("International_Per_Minutes_Charges"));
		Hooks.launch.findElement(By.id("sms_charges")).sendKeys(TariffPlansDetails.get("SMS_Per_Charges"));

	}

	@When("The User click Submit")
	public void the_User_click_Submit() {
		Hooks.launch.findElement(By.xpath("(//input[@type='submit'])[1]")).click();
	}

	@When("The User click Reset Buttons")
	public void the_User_click_Reset_Buttons() {
		Hooks.launch.findElement(By.xpath("(//input[@type='reset'])[1]")).click();

	}

	@When("The User fill all the value details except monthly_rental")
	public void the_User_fill_all_the_value_details_except_monthly_rental(DataTable dataTable) {
		Map<String, String> Error = dataTable.asMap(String.class, String.class);
		Hooks.launch.findElement(By.id("rental1")).sendKeys(Error.get("Monthly_Rental"));
		Hooks.launch.findElement(By.id("local_minutes")).sendKeys(Error.get("Free_Local_Minutes"));
		Hooks.launch.findElement(By.id("inter_minutes")).sendKeys(Error.get("Free_international_Minutes"));
		Hooks.launch.findElement(By.id("sms_pack")).sendKeys(Error.get("Free_SMS_Pack"));
		Hooks.launch.findElement(By.id("minutes_charges")).sendKeys(Error.get("Local_Per_Minutes_Charges"));
		Hooks.launch.findElement(By.id("inter_charges")).sendKeys(Error.get("International_Per_Minutes_Charges"));
		Hooks.launch.findElement(By.id("sms_charges")).sendKeys(Error.get("SMS_Per_Charges"));

	}

	@When("The User fill all the value details {string},{string},{string},{string},{string},{string},{string}")
	public void the_User_fill_all_the_value_details(String Monthly_Rental, String Free_Local_Minutes,
			String Free_international_Minutes, String Free_SMS_Pack, String Local_Per_Minutes_Charges,
			String International_Per_Minutes_Charges, String SMS_Per_Charges) {
		Hooks.launch.findElement(By.id("rental1")).sendKeys(Monthly_Rental);
		Hooks.launch.findElement(By.id("local_minutes")).sendKeys(Free_Local_Minutes);
		Hooks.launch.findElement(By.id("inter_minutes")).sendKeys(Free_international_Minutes);
		Hooks.launch.findElement(By.id("sms_pack")).sendKeys(Free_international_Minutes);
		Hooks.launch.findElement(By.id("minutes_charges")).sendKeys(Monthly_Rental);
		Hooks.launch.findElement(By.id("inter_charges")).sendKeys(Free_Local_Minutes);
		Hooks.launch.findElement(By.id("sms_charges")).sendKeys(SMS_Per_Charges);

	}

	@Then("The User should display new form")
	public void the_User_should_display_new_form() {
		System.out.println(Hooks.launch.findElement(By.id("message2")).isDisplayed());
	}

	@Then("The User should display with message {string}")
	public void the_User_should_display_with_message(String string) {
		Assert.assertTrue(
				Hooks.launch.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}

}
