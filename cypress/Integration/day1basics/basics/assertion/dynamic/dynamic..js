describe('dynamic test', () => {
    it('test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.ui-autocomplete-input').type('in');
        cy.get('ui-menu-item')
        
    });
});