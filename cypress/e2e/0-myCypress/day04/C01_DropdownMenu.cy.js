describe('Dropdomn Locate', () => {
    it('Dropdown Menu', () => {
        cy.visit('https://www.testotomasyonu.com/')

        cy.get('.col-md-10 > .expanding-search-form > .search-dropdown > #dropdownMenuLink').click()

        //cy.get('li'): Tüm <li> etiketlerini alır ve contains('Shoes'):
        //Bu öğelerden içeriği Shoes olanı bulur.
        cy.get('li').contains('Shoes').click();
        
    });

    it('Dropdown Menu', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').select('Option 1').should('have.value',('1')) 
        
    });
    
});