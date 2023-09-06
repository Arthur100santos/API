const { response, request } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')


const app = express()
//RECEBER DADOS DO FRONT END - JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Configurar a TEMPLATE ENGINE - handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middleware para utilizar os arquivos estáticos
app.use(express.static('public'))

//Rota -> localhost:3333
app.get('/', (req, res)=>{
    return res.render('home')
})

app.post('/books/insertbook', (req, res)=>{
    const {title, nm_pages} = req.body

    const sql = `INSERT INTO books (??, ??) VALUES (?, ?) `
    const data = ['title', 'nm_pages', title, nm_pages]

    pool.query(sql, data, function(err){
        if(err){
            console.log(err)
            return
        }
        return res.redirect('/')
    })
})

app.get('/books', (req, res)=>{
    const sql = 'SELECT * FROM books'
    pool.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        res.render('books', {books})
    })
})

//Selecionar o livro
app.get('/books/:id', (request, response)=>{
    const id = request.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        return response.render('book', {book})
    })
})

//EDIÇÃO PRIMEIRA ETAPA
app.get('/books/edit/:id', (request, response)=>{
    const id = request.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    pool.query(sql, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        return response.render('editbook', {book})
    })
})

//EDIÇÃO segunda ETAPA
app.post('/books/updatebook', (request, response)=>{
    const {id, title, nm_pages} = request.body

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'nm_pages', nm_pages, 'id', id]

    pool.query(sql, (err)=>{
        if(err){
            console.log(err)
            return
        }
        return response.redirect('/books')
    })
})

//Rota para excluir o livro
app.post('/books/remove/:id', (request, response)=>{
    const id = request.params.id
    const sql = `DELETE FROM books WHERE id = ${id}`

    pool.query(sql, (err)=>{
        if(err){
            console.log(err)
            return
        }
        return response.redirect('/books')
    })
})


app.listen(3000, ()=>{
    console.log('Server ta on')
})


