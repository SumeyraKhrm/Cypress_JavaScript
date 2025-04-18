
describe('Temel Cypress Komutlari', () => {


    it('cy.visit komut', () => {
        // cy.visit('http://www.wisequarter.com')  //baseUrl tanimli degilse 
        cy.visit('/')  // baseUrl tanimliysa sadece / yeterli
    });

    it.skip('cy.visit komut 2', () => { //skip komutu bu testin es gecilmesini saglar
        cy.visit('/about-us')  // chemin icin detay verebilirsin
    });

    it.only('cy.title komutu ', () => {
        cy.visit('/')  // baseUrl gider
        cy.title().should('eq', 'IT Bootcamp Courses, Online Classes - Wise Quarter Course') //title icin tam esilik durumu
        cy.title().should('include', 'Online') //verilen string icerme durumu 
        cy.title().should('contains', 'Classes') //verilen string icerme durumu 
    });

    it.only('cy.url ve cy.location komutu', () => {
        cy.visit('/')
        cy.url().should('eq', 'https://wisequarter.com/') //title icin tam esilik durumu 
        cy.url().should('include', 'wisequarter') //string icerme durumu

    });
});