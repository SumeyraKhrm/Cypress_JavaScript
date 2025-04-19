describe('MultipleWindows', () => {

    it('Attribute Remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr','target').click()
        //html kodlarinda target='_blank' bu yeni sekmede, pencerede acilmasini saglar
        //onun icin bunu devre disi birakiyoruz

        cy.get('h3').should('have.text','New Window')

    });

});