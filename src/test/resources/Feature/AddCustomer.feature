@Regression
Feature: AddCustomer
	
	Background:
	Given The User is in telecome home page
	And  The User click on addcustomer
	
	@us4 @valid
	Scenario: Manivannan 
	
	When  The User fill all the details
	And  The User Click Submit
	Then  The User should display with customer_id	
	And The user go to home page
	
		@us5 @valid
	Scenario: Kalai
	
	When  The User fill all the details
	And  The User Click Submit
	Then  The User should display with customer_id	
	And The user go to home page