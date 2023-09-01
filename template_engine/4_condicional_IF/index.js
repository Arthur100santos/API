const express = require('express')
const exphbs = require('express-handlebars')

const porta = 3000

//utilazando express
const app = express()
//utilizando o handlebars
app.engine('handlebars', exphbs.engine()) //dois parametros primeiro: ferramenta usada. segundo:  "exphbs.engine()" confirmar qual negocio vai usar
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
    return res.render('dashboard')
})

app.get('/',(req, res)=>{
    const user = {
        name: 'Arthur',
        surname: 'Santos',
        age:17
    }

    const palavra = "teste"
    const auth = true
    return res.render('home', {user:user, palavra, auth})
})

app.listen(3000, ()=>{
    console.log(`Servidor ta on Stuff`)
})