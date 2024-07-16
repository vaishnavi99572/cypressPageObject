describe('window ', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//a[@id="opentab"]').invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com/'),()=>{

            cy.visit('')
            cy.contains('Access all our Courses').click()
        }

    });
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        
    });

});