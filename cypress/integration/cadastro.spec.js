import signup from '../pages/SignupPage'

describe('Cadastro', () => {

    before(function () {
        cy.log('Executa uma vez antes de todos os testes')
    })

    beforeEach(function () {
        cy.log('É executado sempre antes de cada teste')
    })

    after(function () {
        cy.log('Executa uma vez depois de todos os testes')
    })

    afterEach(function () {
        cy.log('É executado sempre depois de cada teste')

    })

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })

    })

    it('Usuário deve se tornar um entregador', function () {
       
       
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })
})