describe('Before / After Islevleri', () => {

    before(() => { //Tum testlerden once bir kere calisir
        
    });


    after(() => {//Tum testlerden sonra bir kere calisir
        cy.log('Tum testler tamamlandi'); 
    });

    beforeEach(() => { //Her bir testten once bir calisir
       cy.log('yeni bir test basliyor'); 
       cy.visit('https://www.testotomasyonu.com/')
    });



    afterEach(() => {//Her bir testten sonra bir calisir
        cy.log('bir test tamamlandi, yeni test basliyor'); 
    });

    it('phone arama', () => {
        cy.get('.col-md-10 > .expanding-search-form > .search-label').type('phone{enter}')
    });

    it('Furniture arama', () => {
    cy.get('.col-md-10 > .expanding-search-form > .search-label').type('Furniture{enter}')
});
    
});