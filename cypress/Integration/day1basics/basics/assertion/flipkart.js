describe('Flipkart', () => {
    it('css selectore of flipkart', () => {
        cy.visit('http://www.flipkart.com/')
        // css selector for header
    
        // css selector for search
        cy.get('input[type="text"]');
        cy.get('a[href="/helpcentre?otracker=${otracker}_navlinks"]');
        cy.get('a[href="/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG"]');
        cy.get('picture[title="Flipkart"]');
        cy.get('div[class="_3NorZ0 _3jeYYh"]');
        cy.get('div[class="H6-NpN _3N4_BX"]');
        cy.get('div[class="_2tczCl"]');
        cy.get('div[class="_1yQHx8 _2UnIQ_ _3ak8Rd _1zHMUC"] ');
        cy.get('a[href="/brands"]');
        cy.get('a[href="/mobiles"]');
        cy.get('a[href="/cameras"]');
        cy.get('a[title="TVs"]');
        cy.get('a[href="/clothing"]');
        cy.get('a[title="CMF by Nothing Phone 1"]');
        cy.get('a[title="Pocket Bazaar"]');
        cy.get('a[title="Xiaomi 14 CIVI"]');
        cy.get('a[title="iPhone 15 Pro Blue"]');
        cy.get('a[title="Vivo x 100"]');
        cy.get('a[title="Track Orders"]');
        cy.get('a[title="iPhone 13"]');
        cy.get('a[title="Gift Cards Store"]')
        
        
    });
});