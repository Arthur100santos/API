const express = require ('express')
const app = express() //atribuindo o modulo externo
const port = 3333

app.get('/',(req, res)=>{ //*ROTA PRINCIPAL* - PARAMETROS: "/"(rota caminho), "REQ", "RES"(função) -
    res.send("HOLA MUONDO")
})
app.get('/cliente',(req, res)=>{ //*ROTA PRINCIPAL* - PARAMETROS: "/"(rota caminho), "REQ", "RES"(função) -
    res.send("Pagna cliente")
})

//get - /clientes -> console =  ""

app.listen(port, ()=>{
    console.log(`Servidor on na porta ${port}`)
}) 
