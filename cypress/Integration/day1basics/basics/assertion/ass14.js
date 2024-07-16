///<reference types="cypress"  />

describe('heroku', () => {
    it('test 1', () => {

        cy.visit('https://the-internet.herokuapp.com/login');
        cy.title().should('include','The Internet');
        
    });
    it('handling invisible element', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.xpath('//div[@id="finish"]').should('not.be.visible');
        cy.xpath('//button[contains(text(),"Start")]').click();
        
    });
});