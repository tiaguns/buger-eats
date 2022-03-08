

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
            whats: '999999999',
            endereco: {
                cep: '49082030',
                rua: 'Rua Amador Bueno',
                numero: '108',
                complemento: 'ap 300',
                bairro: 'Novo Paraíso',
                cidade_uf: 'Aracaju/SE'

                
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

       
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input[type=text]').type(entregador.nome)
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input[type=text]').type(entregador.cpf)
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(1) > input[type=email]').type(entregador.email)
        cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input[type=text]').type(entregador.whats)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        
        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(4) > div:nth-child(1) > input[type=text]').type(entregador.endereco.numero)
        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(4) > div:nth-child(2) > input[type=text]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains(' .delivery-method li', entregador.metodo_entrega).click()
        cy.get('input[accept^="image"]').attachFile(entregador.cnh)

        cy.get('form button[type="submit"]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)



    }) 
})