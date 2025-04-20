describe('WriteandRead Files', () => { //dosya olusturma
    it('Write Files', () => {
        cy.writeFile('/Users/sumeyra/Desktop/cypress/cypress/fixtures/örnek2.txt','Murat Babayiğit\n')
        cy.writeFile('/Users/sumeyra/Desktop/cypreess/cypress/fixtures/örnek2.txt','Wise Quarter',{flag:'a+'})
    });
});


