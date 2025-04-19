describe('', () => {

    //https://www.npmjs.com/package/cypress-iframe 
    //Terminalden npm install -D cypress-iframe komutu ile kurulum
    //require('cypress-iframe') kodunu e2e.js dosyasina ekledik
    //Bu satirla biz cy.frameLoaded ve cy.iframe komutlarini kullanmamizi saglar


    it('IFrame testi', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        //driver.switchTo.frame(locate)

        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().find('p').clear()
        cy.iframe().find('p').type('Have a WISE Day')
        cy.log('Sayfa girisi dogrulandi')
        cy.screenshot()
    });

});