const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'flxdiqrdvohjdv',
    password: '58dfa542d0a62cce96443e5d098b9e83429ef74ee2421df880639bb1a43db7b5',
    host: 'ec2-52-1-115-6.compute-1.amazonaws.com',
    database: 'dajq9t94vt2a4d',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

// const script = `
//     Create table if not exists contatos
//     (
//         ID serial primary key,
//         nome varchar(60) not null,
//         telefone varchar(20) not null
//     )
// `;

// pool.query(script, function(error, result)
// {
//     if(error)
//         throw error;

//     console.log('Tabela criada com sucesso.');
// })


module.exports = {
    async create(nome, telefone){
        try
        {
            const sql = `Insert into contatos (nome, telefone) values ($1, $2)`;
            const result = await pool.query(sql, [nome, telefone]);
            return result.rows;
        }catch(error){
            console.log(error);
            return -1;
        }
        
    },

    async read(){
        const sql = `Select * from contator order by nome`;
        const result = await pool.query(sql); 
        return result.rows;
    },

    async find(id)
    {
        const sql = `Select * from contatos Where  ID = $1`;
        const result = await pool.query(sql, [id]);
        return result.rows;
    },

    async update(id, nome, telefone){
        const sql = `Update contatos SET nome = $1, telefone = $2 Where ID = $3`;
        const result = await pool.query(sql, [nome, telefone, id]);
        return result.rows
    },

    async dalete(id)
    {
        const sql = `Delete from contatos Where  ID = $1`;
        const result = await pool.query(sql, [id]);
        return result.rows;
    },

}
