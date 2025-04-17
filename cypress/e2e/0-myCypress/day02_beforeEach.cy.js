describe('', () => {

    beforeEach(() => {   // beforeEach herbir testden once calisir
        cy.visit('http://google.com')
        //cy.visit('/')
    });

    it('title', () => {
        cy.title().should('eq', 'Google')
        cy.title().should('include', 'Google')
    });

    it('url test', () => {
        cy.url().should('include', 'google')
    });
});