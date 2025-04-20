class Homepage{
    getLoginlink(){
        return cy.get('.btn-sign-in-simple')
    }

    getVisit(){
        return cy.get('https://qa.qualitydemy.com/')
    }
}
export default Homepage