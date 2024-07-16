
describe('appaarel assecories', () => {

    it('test 1', () => {
        cy.visit('https://automationteststore.com/'); // website link
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68_70"]')
    });


    it('add to cart', () => {
        cy.visit('https://automationteststore.com/'); // website link
        cy.get('ul[class="productpagecart"]').click();

        
    });
    it('checkout', () => {
        cy.visit('https://automationteststore.com/'); // website link
        cy.xpath('//*[@id="cart_checkout1"]').click()
        cy.xpath('//*[@id="accountFrm_accountguest"]').click()
        cy.contains('Continue').click();
        cy.xpath('//*[@id="guestFrm_firstname"]').type('vaish')
        cy.xpath('//*[@id="id="guestFrm_lastname""]').type('vdsf')
        cy.xpath('//*[@id="id="guestFrm_email"]').type('@ndfjkshiotj')
        cy.xpath('//*[@id="id="guestFrm_telephone"]').type('34235')
        


        
    });
});