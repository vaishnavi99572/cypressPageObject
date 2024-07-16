describe('amazon test suite', () => {
    it('test 1', () => {
        cy.visit('http://www.amazon.com/');
        cy.xpath('(//script[@type="text/javascript"])[2]')
        cy.xpath('(//span[@class="nav-line-2"])[3]')
        cy.xpath('(//input[@name="dropdown-selection"])[1]')
        cy.xpath('(//span[@class="nav-line-2"])[2]')
        cy.xpath('(//a[@class="nav-a  "])[3]')
        
    });
});