import { faker } from '@faker-js/faker';
describe('Faker Kullanimi', () => {

    /*
    //import { faker } from '@faker-js/faker';
    //Kurulum islemi: 
    //npmjs.com adresinden alinir
    //npm install --save-dev @faker-js/faker kurulumu yapilir


    let variablename= deger atanabilir ve degistirilebilir
    var variablename= deger atanabilir ve degistirilebilir
    const variablename= deger atanabilir ve degistirilemez
*/

    it('Automation Exercise Login Kullanimi', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

       let firstName=faker.name.firstName('female')
       let surname=faker.name.lastName()
       let email=faker.internet.email()
       let password=faker.internet.password()
       let address=faker.location.streetAddress()
       let state=faker.location.state()
       let city=faker.location.city()
       let zipcode=faker.location.zipCode()
       let mobile_number=faker.phone.number()


       cy.get('[data-qa="signup-name"]').type(firstName+''+surname)
       cy.get('[data-qa="signup-email"]').type(email)
       cy.get('[data-qa="signup-button"]').click()
       cy.get('#id_gender1').click()
       cy.get('[data-qa="password"]').type(password)
       cy.get('[data-qa="first_name"]').type(firstName)
       cy.get('[data-qa="last_name"]').type(surname)
       cy.get('[data-qa="address"]').type(address)
       cy.get('[data-qa="country"]').select(1)
       cy.get('[data-qa="state"]').type(state)
       cy.get('[data-qa="city"]').type(city)
       cy.get('[data-qa="zipcode"]').type(zipcode)
       cy.get('[data-qa="mobile_number"]').type(mobile_number)

       cy.get('[data-qa="create-account"]').click()


    
        
    })
    
});