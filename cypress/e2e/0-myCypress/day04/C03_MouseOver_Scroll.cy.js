describe('Hover Over - Scroll', () => {

    it('Hover Over', () => {

        cy.visit('https://www.amazon.fr/')
        cy.get('.a-button-primary').click()

        cy.get('.icp-nav-link-inner').trigger('mouseover')
        cy.wait(1000)

        // mouse ile ustene gelmek icin 
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()

        cy.get('.a-dropdown-prompt').click()

        cy.get('#icp-dropdown_23').click()

        cy.get('.a-button-input').click
    });
    
    it.only('Scroll- Sayfayi belirli bir yere kadar indirme', () => {

        cy.visit('https://www.testotomasyonu.com/')

        //locate alinan yere kadar kaydirir
        cy.get(':nth-child(5) > .flex-wrapper > .cust_left > .short-intro > .heading-lg').scrollIntoView({duration:2000})


        cy.get(':nth-child(3) > .flex-wrapper > .cust_left > .short-intro > .heading-lg').scrollIntoView()
        
    });
});