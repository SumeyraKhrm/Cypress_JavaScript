describe('go komutu kullanimi', () => {

    it('phone arama', () => {
        cy.visit('https://www.testotomasyonu.com/')

        cy.get('.col-md-10 > .expanding-search-form > .search-label').type('phone{enter}')

        cy.go('back') //sayfadan geri donmek icin
        cy.go('forward')  //sayfadan tekrar ileri gitmek
        cy.reload()  //sayfayi reflech etmek icin
        cy.wait(1000)  //bekletme suresi icin
    });
    
});