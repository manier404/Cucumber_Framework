$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddCustomer.feature");
formatter.feature({
  "name": "AddCustomer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User is in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_is_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click on addcustomer",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_on_addcustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Manivannan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@us4"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The User fill all the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerPage.the_User_fill_all_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User Click Submit",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerPage.the_User_Click_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User should display with customer_id",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessPage.the_User_should_display_with_customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user go to home page",
  "keyword": "And "
});
formatter.match({
  "location": "AccessPage.the_user_go_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User is in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_is_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click on addcustomer",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_on_addcustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Kalai",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@us5"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The User fill all the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerPage.the_User_fill_all_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User Click Submit",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerPage.the_User_Click_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User should display with customer_id",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessPage.the_User_should_display_with_customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user go to home page",
  "keyword": "And "
});
formatter.match({
  "location": "AccessPage.the_user_go_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("src/test/resources/Feature/AddTariffPlanToCustomer.feature");
formatter.feature({
  "name": "AddTariffPlanToCustomer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Link the customerid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us6"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"\u003cEnter_Your_Customer_ID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Select the tariff plan",
  "keyword": "And "
});
formatter.step({
  "name": "The user click AddTariffPlanToCustomer",
  "keyword": "Then "
});
formatter.step({
  "name": "The user should see the msg Congratulation Tariff Plan assigned",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Enter_Your_Customer_ID"
      ]
    },
    {
      "cells": [
        "254647"
      ]
    },
    {
      "cells": [
        "992035"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the AddTariffPlanToCustomer",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_the_AddTariffPlanToCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Link the customerid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@us6"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"254647\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_User_Enter_the_CustomerID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_will_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select the tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.select_the_tariff_plan()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user click AddTariffPlanToCustomer",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_click_AddTariffPlanToCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the msg Congratulation Tariff Plan assigned",
  "keyword": "And "
});
formatter.match({
  "location": "InsertPage.the_user_should_see_the_msg_Congratulation_Tariff_Plan_assigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the AddTariffPlanToCustomer",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_the_AddTariffPlanToCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Link the customerid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@us6"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"992035\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_User_Enter_the_CustomerID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_will_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select the tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.select_the_tariff_plan()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user click AddTariffPlanToCustomer",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_click_AddTariffPlanToCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the msg Congratulation Tariff Plan assigned",
  "keyword": "And "
});
formatter.match({
  "location": "InsertPage.the_user_should_see_the_msg_Congratulation_Tariff_Plan_assigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Enter the wrong CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us7"
    },
    {
      "name": "@error"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"\u003cEnter_Your_Customer_ID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the Please Input Your Correct Customer ID",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Enter_Your_Customer_ID"
      ]
    },
    {
      "cells": [
        "123456"
      ]
    },
    {
      "cells": [
        "232322"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the AddTariffPlanToCustomer",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_the_AddTariffPlanToCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Enter the wrong CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@us7"
    },
    {
      "name": "@error"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_User_Enter_the_CustomerID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_will_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the Please Input Your Correct Customer ID",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_should_see_the_Please_Input_Your_Correct_Customer_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the AddTariffPlanToCustomer",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_the_AddTariffPlanToCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Enter the wrong CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@us7"
    },
    {
      "name": "@error"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"232322\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_User_Enter_the_CustomerID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_will_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the Please Input Your Correct Customer ID",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_should_see_the_Please_Input_Your_Correct_Customer_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("src/test/resources/Feature/AddTarrifPlan.feature");
formatter.feature({
  "name": "AddTarrifPlan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the AddTarrifplan",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_the_AddTarrifplan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To test AddTarrifplan with valid details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "The User fill all the value details",
  "rows": [
    {
      "cells": [
        "Monthly_Rental",
        "200"
      ]
    },
    {
      "cells": [
        "Free_Local_Minutes",
        "2000"
      ]
    },
    {
      "cells": [
        "Free_international_Minutes",
        "1000"
      ]
    },
    {
      "cells": [
        "Free_SMS_Pack",
        "100"
      ]
    },
    {
      "cells": [
        "Local_Per_Minutes_Charges",
        "5"
      ]
    },
    {
      "cells": [
        "International_Per_Minutes_Charges",
        "20"
      ]
    },
    {
      "cells": [
        "SMS_Per_Charges",
        "10"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_fill_all_the_value_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click Submit",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_click_Submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User should display with message \"Congratulation you add tariff plan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_should_display_with_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the AddTarrifplan",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_the_AddTarrifplan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Error data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@ErrorData"
    }
  ]
});
formatter.step({
  "name": "The User fill all the value details except monthly_rental",
  "rows": [
    {
      "cells": [
        "Monthly_Rental",
        "erwe"
      ]
    },
    {
      "cells": [
        "Free_Local_Minutes",
        "2000"
      ]
    },
    {
      "cells": [
        "Free_international_Minutes",
        "1000"
      ]
    },
    {
      "cells": [
        "Free_SMS_Pack",
        "100"
      ]
    },
    {
      "cells": [
        "Local_Per_Minutes_Charges",
        "5"
      ]
    },
    {
      "cells": [
        "International_Per_Minutes_Charges",
        "20"
      ]
    },
    {
      "cells": [
        "SMS_Per_Charges",
        "10"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_fill_all_the_value_details_except_monthly_rental(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click Reset Buttons",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_click_Reset_Buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User should display new form",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_should_display_new_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the AddTarrifplan",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.the_User_click_the_AddTarrifplan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Reset Button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@us3"
    },
    {
      "name": "@reset"
    }
  ]
});
formatter.step({
  "name": "The User fill all the value details",
  "rows": [
    {
      "cells": [
        "Monthly_Rental",
        "200"
      ]
    },
    {
      "cells": [
        "Free_Local_Minutes",
        "2000"
      ]
    },
    {
      "cells": [
        "Free_international_Minutes",
        "1000"
      ]
    },
    {
      "cells": [
        "Free_SMS_Pack",
        "100"
      ]
    },
    {
      "cells": [
        "Local_Per_Minutes_Charges",
        "5"
      ]
    },
    {
      "cells": [
        "International_Per_Minutes_Charges",
        "20"
      ]
    },
    {
      "cells": [
        "SMS_Per_Charges",
        "10"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_fill_all_the_value_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click Reset Buttons",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_click_Reset_Buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User should display new form",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanPage.the_User_should_display_new_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("src/test/resources/Feature/PayBilling.feature");
formatter.feature({
  "name": "PayBilling",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Link the customerid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"\u003cEnter_Your_Customer_ID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the Total Bill",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Enter_Your_Customer_ID"
      ]
    },
    {
      "cells": [
        "254647"
      ]
    },
    {
      "cells": [
        "992035"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the PayBilling",
  "keyword": "And "
});
formatter.match({
  "location": "BillingPage.the_User_click_the_PayBilling()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Link the customerid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"254647\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_User_Enter_the_CustomerID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_will_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the Total Bill",
  "keyword": "Then "
});
formatter.match({
  "location": "BillingPage.the_user_should_see_the_Total_Bill()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The User  in telecome home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.the_User_in_telecome_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User click the PayBilling",
  "keyword": "And "
});
formatter.match({
  "location": "BillingPage.the_User_click_the_PayBilling()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Link the customerid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The User Enter the CustomerID \"992035\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_User_Enter_the_CustomerID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user will click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlantoCustomer.the_user_will_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the Total Bill",
  "keyword": "Then "
});
formatter.match({
  "location": "BillingPage.the_user_should_see_the_Total_Bill()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});