//Primeiro instalei nodejs, e depois instalei o express no visual studio code

/* 
    npm -> executa
    npx -> inicializa (cria arquivos)
*/

/*
    Método HTTP:
    - GET : Busca informação no back-end
    - POST : Cria informação no back-end
    - PUT : Altera informação no back-end
    - DELETE: deleta informação no back-end
*/

/*
    Tipos de Parâmetros:
    - Query params: Parâmetros nomeados na rota após "?" (filtros, paginação)
    - Route params: Parâmetros para identificar recursos
    - Request body: Corpo da requisição usado para criar ou alterar recursos
*/

/*
    Banco de dados --> knex
    - Driver: SELECT * FROM users
    - query builder: table('users').select('*').where()
*/

//Variável com referência ao express
const express = require('express')

//Importando rotas
const routes = require('./routes')

//Armazena/instancia a aplicação
const app = express()

const cors = require('cors')

const {errors} = require('celebrate')

app.use(cors())

app.use(express.json())
app.use(routes)

app.use(errors())

/*
//No caminho root / (raiz) -> localhost:3333/users
routes.get('/users', (request, response) => {
    //return response.send('Hello World')

    const params = request.params;
    console.log(params)

    return response.json ({
        evento: 'Semana OmniStack',
        aluno: 'Leonardo Naoki'
    })
})
*/

//Acessa a aplicação no localhost:33333
//app.listen(3333)

module.exports = app

//heroku -> hospedar gratis