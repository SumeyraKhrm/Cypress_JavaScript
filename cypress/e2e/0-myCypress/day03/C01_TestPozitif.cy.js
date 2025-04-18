describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    });

    it.only('Positif Login Test', () => {

        //cy.viewport(1200,2000)
        cy.viewport('macbook-16')

        //signup/login sayfasina git
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        //login to your account yazinisinin bulundugunu dogrula
        cy.get('.login-form > h2').should('be.visible')

        //'New User Signup' yazisinin varligini dogrula
        cy.get('.signup-form > h2').should('be.visible')

        cy.log('New User Signup yazisi kontrol ediliyor');
    });
    it('Giris Islemi', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456{enter}')

        //Logged durumunu test et
        cy.get(':nth-child(10) > a').should('include.text','Logged')
        cy.log('Positif Login Testi Tamamlandi');

    });

});