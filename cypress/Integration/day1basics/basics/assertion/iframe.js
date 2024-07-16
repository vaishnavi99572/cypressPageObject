describe('rahul shetty website', () => {
    it('i frame', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe');
        cy.iframe().contains('Blog').click();
        
    });
});