const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

descibe ('ONG', () => {

    beforeEach(async() => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll (async() => {
        await connection.destroy()
    })

    it('Should be able to create a new ONG', async () => {

        const response = await request(app).post('/ong').send(

            {
                name: "APAD",
                email: "contato@apad.com.br",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
        })

        console.log(response.body)

        expect(request.body).toHaveProperty('id')
        expect(request.body.id).toHaveLength(8)
    })
})