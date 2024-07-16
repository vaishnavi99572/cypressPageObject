describe('tittle of page', () => {
    it('test 1', () => {
        cy.visit('https://books.toscrape.com/')
        cy.title().should('include','All products | Books to Scrape - Sandbox');
        
    });
    it('test 2 add to basket', () => {
        cy.visit('https://books.toscrape.com/')
        cy.xpath('//article[@class="product_pod"]').first().find('a');
        cy.get('button').contains('Add to basket').click();
        
    });
    it('test 3 non fiction', () => {
        cy.visit('https://books.toscrape.com/');
        cy.get('a').contains('Nonfiction').click();
        cy.url().should('include','category/books/nonfiction_13/index.html');
        cy.title().should('include','Nonfiction');
        

    });
});