describe('dropdown', () => {
    it('test 1 by value', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');
        cy.xpath('//select[@id="dropdown-class-example"]').select('').should('have.value','');

        
    });
    it('test 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');

        
    });
    it('test 3', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        cy.get('#dropdown-class-example').select(1).should('have.value','option1');
        cy.get('#dropdown-class-example').select(2).should('have.value','option2');
        cy.get('#dropdown-class-example').select(3).should('have.value','option3');
        
    });
});