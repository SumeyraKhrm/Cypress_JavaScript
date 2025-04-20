class LoginPage{
    getUserEmail(){
    return cy.get('#login-email').type('mb@babayigit.net')
    
    }

    getPasswordBox(){
    return cy.get('#login-password').type('M123456.b')

    }

    getLoginButton(){
        return cy.get('#sign_up > :nth-child(3) > .btn').click()
    }
}
export default LoginPage