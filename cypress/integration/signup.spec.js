import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

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

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })

    // })

    it('User should become a deliver', function () {

        var deliver = signupFactory.deliver()
       
       
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })

    it('Invalid e-mail', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'
       
       
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = ('Oops! Email com formato inválido.')
        signup.alertMessageShouldBe(expectedMessage)

    })
})    
