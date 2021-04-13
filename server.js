const express = require('express');
const{ uuid } = require('uuidv4');

const server = express();

const database = require('./database');

//middleware
server.use(express.json())

contatos = []

//POST -> Create
//GET -> Read
//PUT -> Update
//DELETE -> Delete

server.get('/', async function(request, response) {
    const contatos = await database.read();
    response.json(contatos); 
})

server.get('/:id', async function(request, response){
    const id = request.params.id;
    const contato = await database.find(id);
    response.json(contato);
})

server.post('/', async function(request, response)
{
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    // var contato = {
    //     id: uuid(),
    //     nome, 
    //     telefone
    // };

    const result = await database.create(nome, telefone);

    // contatos.push(contato);

    response.status(201).send();
})

server.listen(process.env.PORT || 3000);