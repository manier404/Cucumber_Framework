#Author: your.email@your.domain.com
@Regression
Feature: AddTarrifPlan
Background:
Given The User  in telecome home page
    And The User click the AddTarrifplan

	@us1 @valid
  Scenario: To test AddTarrifplan with valid details
    
    When The User fill all the value details
      | Monthly_Rental                    |  200 |
      | Free_Local_Minutes                | 2000 |
      | Free_international_Minutes        | 1000 |
      | Free_SMS_Pack                     |  100 |
      | Local_Per_Minutes_Charges         |    5 |
      | International_Per_Minutes_Charges |   20 |
      | SMS_Per_Charges                   |   10 |
    And The User click Submit
    Then The User should display with message "Congratulation you add tariff plan"
	@us2 @ErrorData
  Scenario: Error data
   
    When The User fill all the value details except monthly_rental
      | Monthly_Rental                    | erwe |
      | Free_Local_Minutes                | 2000 |
      | Free_international_Minutes        | 1000 |
      | Free_SMS_Pack                     |  100 |
      | Local_Per_Minutes_Charges         |    5 |
      | International_Per_Minutes_Charges |   20 |
      | SMS_Per_Charges                   |   10 |
    And The User click Reset Buttons
    Then The User should display new form
	@us3 @reset
  Scenario: Reset Button
   
    When The User fill all the value details
      | Monthly_Rental                    |  200 |
      | Free_Local_Minutes                | 2000 |
      | Free_international_Minutes        | 1000 |
      | Free_SMS_Pack                     |  100 |
      | Local_Per_Minutes_Charges         |    5 |
      | International_Per_Minutes_Charges |   20 |
      | SMS_Per_Charges                   |   10 |
    And The User click Reset Buttons
    Then The User should display new form
