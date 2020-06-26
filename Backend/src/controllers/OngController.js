const crypto = require('crypto')
const connection = require('../database/connection')

const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId()

        await connection('ongs').insert ({
            id, email, whatsapp, city, uf, name, 
        })

        return response.json({ id })
    }
}