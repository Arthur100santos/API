const mysql = require('mysql2')

//Criar uma conexão com o banco poolConection
const pool = mysql.createPool({
    connectionLimit: 0,
    host:'localhost', //ou '127.0.0.1'
    port:'3306',
    user:'aluno_medio',
    password:'@lunoSenai23.',
    database:'banco2'
})

module.exports = pool