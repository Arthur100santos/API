const express = require('express')
const exphs = require('express-handlebars')

const conn = require('./db/conn')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.engine('handlebars', exphs.engine())
app.set('views engine','handlebars')

app.use(express.static('public'))

app.get('/', (request, response)=>{
    return response.render('home')
})

app.listen(3000, ()=>{
    console.log('SERVER ON')
})