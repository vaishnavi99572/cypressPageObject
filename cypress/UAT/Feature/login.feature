Feature: Log in

Scenario Outline: validating the login of Orange HRM

Given open the browser and enter url

When enter username as <username>
And enter password as <password>

And click on submit

Then log in should be sucessfull

Examples:
    | username  | password|  
    | aDmin     | Admin123| 
    |admin      | adMin123 |
    |Admin      | Admin123|
    |admiN      | adMin123|