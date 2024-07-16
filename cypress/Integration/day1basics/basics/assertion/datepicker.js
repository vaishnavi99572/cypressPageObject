describe('date', () => {
    it('date format', () => {
        cy.visit('https://jqueryui.com/datepicker/');

        cy.frameLoaded('.demo-frame');
        cy.iframe().contains('Date: ').type('07/07/2024{enter}')

        
    });
});