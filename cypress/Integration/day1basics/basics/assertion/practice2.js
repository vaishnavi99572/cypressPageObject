describe('Automation store', () => {
    it('Test of store', () => {


        cy.visit('https://automationteststore.com/');

        cy.get('input[id="ContactUsFrm_first_name"]').type('vaishnavi');

        cy.get('input[id="ContactUsFrm_email"]').type('vaishnvai@gmail.com');

        cy.get('textarea[id="ContactUsFrm_enquiry"]').type('details');
        cy.get('button[title="Submit"]').click();


        
    });
});