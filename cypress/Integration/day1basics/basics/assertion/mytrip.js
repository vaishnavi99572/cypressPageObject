describe('Make myntrip', () => {



    it('Test 1', () => {
        cy.visit('https://www.makemytrip.com/')

        cy.xpath('//span[@data-cy="myBizText"and@class="latoBold"]')
        
    });
});