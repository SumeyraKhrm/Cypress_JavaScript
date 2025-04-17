describe('locate Alma', () => {

    beforeEach(() => {   // beforeEach herbir testden once calisir
        cy.visit('http://google.com')
        //cy.visit('/')
    });

    it('cy.get komutu', () => {
        cy.visit('http://google.com')
        cy.get('#APjFqb').type('cypress{enter}')  //locater al ve oraya cypress yaz sonra enter a bas demek
        cy.get('.gb_B').click

    });

});

//xpath --> //input[@id='sum']    ---> Cypress version cy.get('//input[@id="sum"]') 
//Yani cift tirnak kullanmaya dikkat et !

//cy.get komutunda id aliniyorsa cy.get('id[APjFqb]') yerine
//cy.get('#APjFqb') yani id ise # koymak gerekir
//class almissak . nokta koymak gerekir

