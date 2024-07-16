describe('assert the text', () => {
    it('test 1', () => {
        cy.visit('https://www.google.co.in/')
        cy.get('#APjFqb').type('Masai')
        cy.get('#APjFqb').should('have.value','Masai');
        
        
    });
});