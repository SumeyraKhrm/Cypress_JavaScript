describe('flavorfetch Login Testi', () => {

    it.skip('Log in Testi', () => {
        cy.visit('https://qa.flavorfetch.com/')
        cy.contains('Sign in', { matchCase: false }).click()
        cy.get(':nth-child(1) > .el-button > span').click()
        cy.get(':nth-child(1) > .required').type('sumeyracoskun@flavorfetch.com')

        cy.get('.change_field_password > label.required').type('Flavor.2106{enter}')

        //cy.get('.btn-green').click() // 2. yol direk login buttonu

    });

    it('Commands Positif Login Testi', () => {
        cy.FlavorfetchLogin('sumeyracoskun@flavorfetch.com','Flavor.2106')
    });

    it('Commands Negatif Login Testi', () => {
        cy.FlavorfetchLogin('sumeyracoskun@flavorfetch.com','Flavor.2100')
        cy.get('.alert > p').should('be.visible')
    });

});