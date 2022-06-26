const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

const routeClients = require("./routes/clientes")
const routeLogin = require("./routes/login")

app.use(routeClients)
app.use(routeLogin)

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.listen(3000, ()=>{
    console.log("O servidor está rodando na porta 3000")
})