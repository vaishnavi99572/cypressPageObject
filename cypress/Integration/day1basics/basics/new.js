describe('Test Suite - collection of tests', () => {



    it('Test1', () => {

        cy.visit('https://the-internet.herokuapp.com/login')
        
    });
    it('using x path test', () => {
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.xpath('//input[@name="username"]').type("vaishnavilakhore");

        cy.xpath('//input[@name="password"]').type("vaishnavi");

        cy.xpath('//button[@class="radius"]').click();
        
    });
});