const express = require("express")
const app = express()

const routeClients = require("./routes/clientes")

app.use(routeClients)
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.listen(3000, ()=>{
    console.log("O servidor está rodando na porta 3000")
})