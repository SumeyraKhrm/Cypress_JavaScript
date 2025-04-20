describe('Json ile Login Test', () => {

    before(function () {  // function() ile 'this' bağlanır
        cy.fixture('automationexercise').then(function (data) {
            this.data = data;  // Veriyi 'this' ile erişilebilir hale getir
        });
    });

    it('Login Testi', function () {  // function() ile 'this' bağlanır
        cy.visit(this.data.url);  // 'this.data' doğru şekilde erişilebilir olacak

        //signup/login sayfasina git
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type(this.data.user);  // Kullanıcı adı
        cy.get('[data-qa="login-password"]').type(this.data.password);  // Şifre


        // Başarılı giriş sonrası doğrulama

    });
});

