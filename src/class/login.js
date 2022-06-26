module.exports = class Login{
    constructor(){
        this.mysql = require('mysql2/promise')
        this.connection = ''
    }
    async connect(){
        this.connection = await this.mysql.createConnection({ 
            host:"localhost",
            user:"userslow",
            password: "pass123",
            database:"slowbar",
        })
    }
    async getLogin(){
        return await this.connection.execute('select * from login')
    }
    async validate(usr, pass){
        console.log(usr, pass)
        var validate = false
        var users = await this.getLogin()
        users[0].forEach((user)=>{
            console.log(user.usuario, user.senha)
            if(user.usuario==usr&&user.senha==pass){
                validate = true
            }
        })
        return validate
    }
}