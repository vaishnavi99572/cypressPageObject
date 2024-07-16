

describe('OrangeHRM Suits', () => {
    it('Login Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type("Admin")

        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        
    });

    it('facebook login', () => {
        cy.visit('https://www.facebook.com/login/')

        cy.get('#email').type('vaishnavilakhore@gmail.com')

        cy.get('#pass').type('vaishnavi123')

        cy.get('#loginbutton').click()
        

    });
});