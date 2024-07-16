describe('alert', () => {
    it('alert test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();

        cy.on('window:alert',(alertmsg)=>{
           expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge')
           return true;


        })

        //handle confirmation
        cy.get('#confirmbtn').click();

        cy.on('window:confirm',(msg)=>{
            expect(msg).to.eq('Hello , Are you sure you want to confirm?')

            return false;

        })

        
    });
});