describe('table 1', () => {
    it('', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1 tbody tr').eq(3).find('td').eq(2).invoke('text').then((text) => {
         cy.log('4th row 3rd column value from 1st table: ' + text);

            //if ($value.text().includes('Tim')) {
                //cy.wrap($value).next().then((text)=>{
                  //  cy.log(text.num);
            //})
     });     })
});