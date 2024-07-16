describe('log in feature', () => {
    it('log in', () => {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm')
        cy.get('input[type="text"]').type('Admin');
        cy.get('input[id="password"]').type('admin123');
        cy.get('i[id="togglePassword"]').click().should('be.visible');
        cy.get('li[id="Inpatient Ward"]').click();
        cy.get('input[class="btn confirm"]').click();
        
    });
});