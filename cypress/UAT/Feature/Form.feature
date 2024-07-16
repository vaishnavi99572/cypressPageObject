Feature: Simple form

Scenario: To validate the form

Given  user open the simple form url

When user enters,firstname,lastname,email,contact,message

And  click  on submit

Then  an alert message saying user sucessfully submit the form 



    