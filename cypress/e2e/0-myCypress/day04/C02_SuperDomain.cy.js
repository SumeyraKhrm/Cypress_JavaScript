describe('Super Domain', () => {

    it('Ayni Class da iki farkli Domain', () => {
        cy.visit('https://www.amazon.fr/')
        cy.visit('https://www.amazon.fr/b/?node=2383619031&ld=AZFRGNOSellC&ref_=nav_cs_sell')

       // cy.visit('https://www.google.com')
    });
    
    //farkli bir siteye gecmeye calisinca aldilanmiyor fakat ayni site icinde geci yapilarbilir
    //bunun icin farkli it blok olusturulmali

    it('Farkli Adres', () => {
        cy.visit('https://www.google.com')
    
    });
});