@Smoke
Feature: AddTariffPlanToCustomer

  Background: 
    Given The User  in telecome home page
    And The User click the AddTariffPlanToCustomer

  @us6
  Scenario Outline: Link the customerid
    When The User Enter the CustomerID "<Enter_Your_Customer_ID>"
    And The user will click the submit button
    And Select the tariff plan
    Then The user click AddTariffPlanToCustomer
    And The user should see the msg Congratulation Tariff Plan assigned

    Examples: 
      | Enter_Your_Customer_ID |
      |                 254647 |
      |                 992035 |

  @us7 @error
  Scenario Outline: Enter the wrong CustomerID
    When The User Enter the CustomerID "<Enter_Your_Customer_ID>"
    And The user will click the submit button
   	Then The user should see the Please Input Your Correct Customer ID

    Examples: 
      | Enter_Your_Customer_ID |
      |                 123456 |
      |                 232322 |
