

describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport (1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('#page-home > div > main > a').click()
        cy.get('#page-deliver > form > h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {

            nome: 'Tiago Nascimento',
            cpf: '00000000025',
            email: 'tiaguns@gmail.com',
            whats: '999999999'
        }

       
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input[type=text]').type(entregador.nome)
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input[type=text]').type(entregador.cpf)
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(1) > input[type=email]').type(entregador.email)
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input[type=text]').type(entregador.whats)



    })
})