describe('window', () => {
    it('test 1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('a[href="/windows/new"').invoke('removeAttr','target').click();
        cy.url().should('include','/windows/new');
        cy.contains('h3','New Window').should('be.visible')
    })
});