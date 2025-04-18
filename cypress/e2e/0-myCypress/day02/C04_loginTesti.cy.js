describe('flavorfetch Login Testi', () => {

    beforeEach(() => {   // beforeEach herbir testden once calisir
        cy.visit('https://qa.flavorfetch.com/')
    });

    it('Log in Testi', () => {
       //cy.get('.line-left > a').click()   //bu 1.yol elementi locate ederek
       //cy.contains('Sign in').click()  

        cy.contains('Sign in',{matchCase:false}).click() 
        cy.get(':nth-child(1) > .el-button > span').click()  //cookies accepter

        cy.get(':nth-child(1) > .required').type('sumeyracoskun@flavorfetch.com')

        cy.get('.change_field_password > label.required').type('Flavor.2106{enter}') //sonunda enter tusuna basildi

        //cy.get('.btn-green').click() // 2. yol direk login buttonu
       
    });

});