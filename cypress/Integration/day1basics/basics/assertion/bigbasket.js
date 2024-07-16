describe('bigbasket test', () => {

    it('test 1', () => {
        cy.visit('http://www.bigbasket.com/');
        cy.xpath('//button[contains(text(),"Login/ Sign Up")]');
        cy.xpath('//span[contains(text(),"Home")]');
        cy.xpath('//span[contains( text(),"View All")]');
        cy.xpath('//h4[contains(text(),"Help")]');
        cy.xpath('//h4[contains(text(),"Bigbasket")]');
    });
});