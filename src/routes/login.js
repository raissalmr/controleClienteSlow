const express = require("express")
const router = express.Router()

const Login = require("../class/login")
var login = new Login()
login.connect()
router.use(express.json())

router.post('/login', (req, res)=>{
    login.validate(req.body.user, req.body.password)
    .then((results)=>{
        console.log(results)
        res.json(results)
    })
})

module.exports = router