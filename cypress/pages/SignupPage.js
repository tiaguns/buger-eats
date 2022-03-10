class SignupPage {

go() {

    cy.visit('/')
    cy.get('#page-home > div > main > a').click()
    cy.get('#page-deliver > form > h1').should('have.text', 'Cadastre-se para  fazer entregas')

}

fillForm(deliver) {
    cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input[type=text]').type(deliver.name)
    cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input[type=text]').type(deliver.cpf)
    cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(1) > input[type=text]').type(deliver.email)
    cy.get('#page-deliver > form > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input[type=text]').type(deliver.whats)
    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type=button][value="Buscar CEP"]').click()
    
    cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(4) > div:nth-child(1) > input[type=text]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

    cy.contains(' .delivery-method li', deliver.delivery_method).click()
    cy.get('input[accept^="image"]').attachFile(deliver.cnh)

    }

    submit() {
        cy.get('form button[type="submit"]').click()

    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }
    

    alertMessageShouldBe(expectedMessage) {
        cy.get('.alert-error').should('have.text', expectedMessage)
    }

    

}

export default  new  SignupPage;




