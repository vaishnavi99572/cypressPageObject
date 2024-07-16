///<reference types="cypress"/>
///<reference types="cypress-xpath"/>



describe('radio and checkbox', () => {
    it('radio', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('(//input[@class="radioButton"])[1]').check().should('be.visible').and('be.checked').and('have.attr','type','radio').and('have.attr','radioButton')


        
    });
    
    it('table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//table[@name="courses"]/tbody/tr[4]/td[2]')
        cy.xpath('(//table)[2]/tbody/tr[8]/td[2]')
        
    });
});