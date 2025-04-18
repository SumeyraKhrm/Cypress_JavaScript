describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    });

    it('Negatif Login Test', () => {

         //signup/login sayfasina git
         cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

         cy.get('[data-qa="login-email"]').type('baba@gmail.com')
         cy.get('[data-qa="login-password"]').type('123456{enter}')

         cy.get('.login-form > form > p').should('include.text','incorrect')
         cy.log('Test Basariyla Tamamlandi');
         
        
    });
});