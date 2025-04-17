context('context kullanimi', () => {  // buda bir test suite
   
    it('google ziyaret', () => {
        cy.visit('http://google.com')
    });

    it('title', () => {
        cy.visit('http://google.com')
        cy.title().should ('include','Google')
        
    });

});