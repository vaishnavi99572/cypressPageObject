describe('ebay text function', () => {
    it('test1', () => {
        cy.visit('http://www.ebay.com/')

        cy.xpath('//a[text()=" Help & Contact"]');
        cy.xpath('//a[text()=" Daily Deals"]');
        cy.xpath('//a[text()=" Sell"]');
        cy.xpath('//option[text()="All Categories"]');
        cy.xpath('//a[text()="Saved"]')
    });
});