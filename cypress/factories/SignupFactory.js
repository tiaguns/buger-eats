
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whats: '999999999',
            address: {
                postalcode: '49082030',
                street: 'Rua Amador Bueno',
                number: '108',
                details: 'ap 300',
                district: 'Novo Paraíso',
                city_state: 'Aracaju/SE'
    
                
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        
        return data

    }
}

