import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user open the simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')
})
When('user enters,firstname,lastname,email,contact,message',()=>{
    cy.get('#firstName').type('vaishnavi');
    cy.get('#lastName').type('lakhore');
    cy.get('#email').type('vaishnavilakhore@gmail.com');
    cy.get('#number').type('7828184869');
    cy.xpath('//textarea').type('ghsbij');
})
And('click  on submit',()=>{
    cy.xpath('//input[@value="submit"]').click();
})
Then('an alert message saying user sucessfully submit the form',()=>{
    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us, vaishnavi lakhore');
        return true;
    })
})
