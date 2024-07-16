describe('window ', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//a[@id="opentab"]').invoke('removeAttr','target').click();
        
    });
});