
@Regression
Feature: PayBilling
 
Background: 
    Given The User  in telecome home page
    And The User click the PayBilling
  

  @tag2
  Scenario Outline: Link the customerid
    When The User Enter the CustomerID "<Enter_Your_Customer_ID>"
    And The user will click the submit button
   
    Then The user should see the Total Bill

     Examples: 
      | Enter_Your_Customer_ID |
      |                 254647 |
      |                 992035 |