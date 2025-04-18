describe('Locate Alma Fonksiyon Islemi', () => {
    cy.visit('https://www.automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    //1. yol 
    //cy.get('.login-form > h2').should('include.text','Login')

    //2.yol --Bunu bir fonksiyon olusturarak yapabiliyoruz
    cy.get('.login-form > h2').then(textcontrol => {
        expect(textcontrol.text()).to.contains('Login')
    })


});