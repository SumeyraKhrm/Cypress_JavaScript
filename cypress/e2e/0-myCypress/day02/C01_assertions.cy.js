describe('Assertion', () => {

    beforeEach(() => {   // beforeEach herbir testden once calisir
        cy.visit('https://qa.flavorfetch.com/')
    });

    it('Assertion Tests', () => {
        //cy.contains('Sign in').click()  

        cy.get(':nth-child(1) > .el-button > span').click()  //cookies accepter

        // have text :sign in locate' inde sing in yazisi var mi
        cy.get('.line-left > a').should('have.text', 'Sign in')

        cy.get('.line-left > a').click()

        //cy.url().should : url'nin login iceriyor mu
        cy.url().should('include', 'login')


        //cy.title().should : sayfa basligi istenilen degere esit mi
        cy.title().should('eq', 'Flavor Fetch')

        //be.visible metin goruntulebilir durumda mi ?
        cy.get('.text-center.mb-4').should('be.visible')

        //include text yazisini iceriyor mu
        cy.get('.line-left > a').should('include.text', 'Sign in')


    });

});