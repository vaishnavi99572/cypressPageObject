///<reference types="cypress"  />

describe('alert ', () => {
    it('test 1', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click();

        cy.on('window:alert',(alertmsg)=>{
            expect(alertmsg).to.equal('I am a JS Alert');
            return true
        })
        cy.get('#result').should('have.text','You successfully clicked an alert');
    })


    it('js confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click();

        cy.on('window:alert',(msg)=>{
            expect(msg).to.equal('I am a JS Confirm');
            return true;
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    });

    it('haldle prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.on('window:alert',(msg)=>{
            expect(msg).to.equal('I am a JS prompt').type('cypress').click();
            return true;
    });
    cy.get('#result').should('have.text','You entered: cypress');
});
});
