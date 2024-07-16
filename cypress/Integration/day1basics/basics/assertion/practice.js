cc
describe('Practice test', () => {
    it('test 1- URL assertion', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//asserting with given endpoint
        cy.url().should('include','AutomationPractice/')

        cy.title().should('include','Practice Page');
        // visiblity assertion
        cy.get('[name="show-hide"]').should('be.visible');

        cy.get('#hide-textbox').click();

        cy.get('[name="show-hide"]').should('not.be.visible');

        //cy.get('.ui-autocomplete-input').type('hello').should('hav')
        
    });
});