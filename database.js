const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'flxdiqrdvohjdv',
    password: '58dfa542d0a62cce96443e5d098b9e83429ef74ee2421df880639bb1a43db7b5',
    host: 'ec2-52-1-115-6.compute-1.amazonaws.com',
    database: 'dajq9t94vt2a4d',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

const script = `
    Create table if not exists contatos
    (
        ID serial primary key,
        nome varchar(60) not null,
        telefone varchar(20) not null
    )
`;

pool.query(script, function(error, result)
{
    if(error)
        throw error;

    console.log('Tabela criada com sucesso.');
})

