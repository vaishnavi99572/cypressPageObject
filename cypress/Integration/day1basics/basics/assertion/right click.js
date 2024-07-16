

describe('mosue', () => {
    it('right click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath('//*[.="right click me"]').rightclick();
        cy.xpath('//button[@ondblclick="myFunction()"]').dblclick();
        
    });
    it('hover test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')
        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');

        
    });
    it('approach 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').trigger('mouse');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top')

        
    });
    
});