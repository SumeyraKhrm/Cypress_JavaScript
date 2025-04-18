describe('CheckBox Metodlari', () => {

    it('CheckBox secimi', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')

    });

    it('Sirasina gore secme', () => {
       cy.visit('https://the-internet.herokuapp.com/checkboxes')
       cy.wait(2000)
       cy.get("input[type='checkbox']").eq(1).uncheck().should('not.be.checked')
       cy.wait(2000)
       cy.get("input[type='checkbox']").first().check().should('be.checked')   //first()=eq(0)
       

    });

});