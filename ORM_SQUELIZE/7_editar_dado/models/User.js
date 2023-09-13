const { DataTypes } = require('sequelize')
const db = require('../db/conn')

/*
* CREATE TABLE User (
    *name VARCHAR (255) NOT NULL,
    *occupation VARCHAR (255) NOT NULL,
    *newsletter BOOL 
);
*/ 
const User = db.define('User',{ //tabela
    //estrutura da tabela:
    name: {                      
        type:DataTypes.STRING, //tipo
        allowNull: false //obrigatoriedade
    },
    occupation: {
        type: DataTypes.STRING,
        require: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }

})

module.exports = User