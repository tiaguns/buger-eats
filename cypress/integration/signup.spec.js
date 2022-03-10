import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import signupPage from '../pages/SignupPage'


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

    context('Required fields', function () {

        const messages = [

            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'name', output: 'É necessário informar o CPF' },
            { field: 'name', output: 'É necessário informar o email' },
            { field: 'name', output: 'É necessário informar o CEP' },
            { field: 'name', output: 'É necessário informar o número do endereço' },
            { field: 'name', output: 'Selecione o método de entrega' },
            { field: 'name', output: 'Adicione uma foto da sua CNH' }

        ]

        before(function () {
            signupPage.go()
            signupPage.submit()


        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })


    })

    it('Required fields', function () {
        signupPage.go()
        signupPage.submit()
        signupPage.alertMessageShouldBe('É necessário informar o nome')
        signupPage.alertMessageShouldBe('É necessário informar o CPF')
        signupPage.alertMessageShouldBe('É necessário informar o email')
        signupPage.alertMessageShouldBe('É necessário informar o CEP')
        signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        signupPage.alertMessageShouldBe('Selecione o método de entrega')
        signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })
})    
