@tag
Feature: AddTariffPlan_DataDriven
Background:
 		Given The User  in telecome home page
    And The User click the AddTarrifplan
  @tag2
  Scenario Outline: To test AddTarrifplan with valid details
   
    When The User fill all the value details "<Monthly_Rental>","<Free_Local_Minutes>","<Free_international_Minutes>","<Free_SMS_Pack>","<Local_Per_Minutes_Charges>","<International_Per_Minutes_Charges>","<SMS_Per_Charges>"
    Then The User click Submit
    And The User should display with message "Congratulation you add tariff plan"

    Examples: 
      | Monthly_Rental | Free_Local_Minutes | Free_international_Minutes | Free_SMS_Pack | Local_Per_Minutes_Charges | International_Per_Minutes_Charges | SMS_Per_Charges |
      |           1000 |                100 |                         10 |             2 |                         4 |                                 6 |               4 |
      |           2000 |                100 |                         20 |             4 |                         6 |                                 8 |               4 |
