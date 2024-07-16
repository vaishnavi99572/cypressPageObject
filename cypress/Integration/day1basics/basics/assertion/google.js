describe('scroll', () => {
    it('', () => {
        cy.visit('https://www.google.com/');
        cy.get('[title="Search"]').type('masai{enter}');
        

        cy.scrollTo(0,-2000)
        cy.contains('Masai School').scrollIntoView().wait(2000).click()

        
    });
});