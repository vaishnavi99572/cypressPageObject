describe('check google tittle', () => {

    it('tittle check', () => {
        cy.visit('https://google.com')
        cy.title().should('eq','Google')
        
    });
});