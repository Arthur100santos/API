const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Usuario = db.define('Usuario',{

    name: {                      
        type:DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        require: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }

})


module.exports = Usuario