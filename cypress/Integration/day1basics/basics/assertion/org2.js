describe('orange hrm', () => {
    it('test1 ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('.oxd-button').click();
        cy.contains('Admin').click();
        cy.get('[placeholder="Type for hints..."]').type('p');


        
    });
});