//hoooks  in cypress
// before a describe block
before(() => {
    cy.fixture('example').then((data)=>{
        globalThis.data=data;
    })
    
});
describe('data driven', () => {
    it('orange hrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[name='username']").type(data.username);
    cy.get("input[name='password']").type(data.password);
    cy.get('.oxd-button').click();



        
    });
});
