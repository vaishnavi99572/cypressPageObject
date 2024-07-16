describe('redbus', () => {
    it(' x-path Test 1', () => {
        cy.visit('http://www.redbus.com/')
//x path for search button
        cy.xpath('//button[@id="search_butn"]');
        // x path for log in button
        cy.xpath('//div[@class="rdc-login"]');
        // x path for airport transfer
        cy.xpath('//a[@href="/airport-transfers"]');
        // xpath for  destination
        cy.xpath('//div[@class="destination input-box"]');
        // x path redbus logo
        cy.xpath('//img[@class="home-redirect rdc-redbus-logo "]');
        // x path for book now
        cy.xpath('//div[@class="air-button"]');

        // x path for source
        cy.xpath('//div[@class="source input-box "]');
        // x path for return date
        cy.xpath('//div[@class="returndate input-box "]');
        // x path for manage booking
        cy.xpath('//div[@class="manageHeaderLbl"]');
        // x path for inr
        cy.xpath('//div[@id="curr_chosen"]');
        // x path for image
        cy.xpath('//img[@class="hero-image"]')
        // x path for placeholder destination
        cy.xpath('//input[@placeholder="Ex: London Airport"]')

        // x path for source
        cy.xpath('//input[@placeholder="Ex: Paris"]');
        // x path for know more
        cy.xpath('//div[@class="safety-button"]');
        // x path for bus route
        cy.xpath('//a[@href="https://www.redbus.com/bus-ticket/singapore-to-kuala-lumpur"]')
        // x path most popular bus route
        cy.xpath('//div[@class="pop-head"]');
        //  x path for about us
        cy.xpath('//a[@href="/info/aboutus"]');
        // x path for privacy policy
        cy.xpath('//a[@href="/info/privacypolicy"]');
        // x path for global site(india)
        cy.xpath('//a[@href="https://www.redbus.in/"]');


        
    });
});