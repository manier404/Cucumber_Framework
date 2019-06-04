package feature;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;

public class HomePage {
	@Given("The User is in telecome home page")
	public void the_User_is_in_telecome_home_page() {

	}
	@Given("The User click on addcustomer")
	public void the_User_click_on_addcustomer() {
		Hooks.launch.findElement(By.xpath("(//a [text()='Add Customer'])[1]")).click();
	}
	@Given("The User  in telecome home page")
	public void the_User_in_telecome_home_page() {

	}
	@Given("The User click the AddTarrifplan")
	public void the_User_click_the_AddTarrifplan() {
		Hooks.launch.findElement(By.xpath("(//a [text()='Add Tariff Plan'])[1]")).click();
	}
	@Given("The User click the AddTariffPlanToCustomer")
	public void the_User_click_the_AddTariffPlanToCustomer() {
		Hooks.launch.findElement(By.xpath("(//a [text()='Add Tariff Plan to Customer'])[1]")).click();
	}
	

}
