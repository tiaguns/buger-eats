

describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home > div > main > h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })

})

