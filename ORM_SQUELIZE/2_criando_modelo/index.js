const { request, response } = require('express')
const express = require('express')
const exphs = require('express-handlebars')

const conn = require('./db/conn')

const User = require('./models/User')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('handlebars', exphs.engine())
app.set('views engine','handlebars')

app.use(express.static('public'))

app.get('/', (request, response)=>{
    return response.render('home')
})

conn
.sync()
.then(()=>{
    app.listen(3333, ()=>{
        console.log('SERVER ON')
    })
}).catch((err)=>console.log(err))