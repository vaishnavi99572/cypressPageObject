describe('table', () => {
    it.skip('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').should('include.text','Appium (Selenium) - Mobile Automation Testing from Scratch') 
        
    })
    it('test 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($ele)=>{
            if ($ele.text().includes('Python'))   {
                cy.wrap($ele).next().then((num)=>{
                    cy.log(num.text)
                })
            }
        })
    });
})