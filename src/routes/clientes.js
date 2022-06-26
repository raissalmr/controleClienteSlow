const express = require("express")
const router = express.Router()

const Clientes = require("../class/clientes")
var clientes = new Clientes()
clientes.connect()
router.use(express.json())

router.get('/clientes', (req, res)=>{
    clientes.getClients()
    .then((results)=>{
        res.json(results[0])
    })
})

router.post('/clientes',(req, res)=>{
    clientes.insertClient(req.body.nome, req.body.telefone, req.body.cpf, req.body.endereco, req.body.bairro, req.body.cidade, req.body.rg)
    .then((results)=>{
        res.json(results)
    })
})

router.post('/deleteClient', (req, res)=>{
    clientes.deletClient(req.body.id)
    .then((results)=>{
        res.json(results)
    })
})

router.post('/cliente', (req, res)=>{
    clientes.findClient(req.body.id)
    .then((results)=>{
        res.json(results)
    })
})

router.post('/addCommand', (req, res)=>{
    clientes.insertCommand(req.body.id,req.body.command)
    .then((results)=>{
        res.json(results)
    })
})

router.post('/editClient', (req, res)=>{
    clientes.editClient(req.body.id,req.body.nome, req.body.telefone, req.body.cpf, req.body.endereco, req.body.bairro, req.body.cidade, req.body.rg)
    .then((results)=>{
        res.json(results)
    })
})

module.exports = router