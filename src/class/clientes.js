module.exports = class Clientes{
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
    async getClients(){
        return await this.connection.execute('select * from clientes')
    }
    async insertClient(nome, telefone, cpf, endereco, bairro, cidade, rg){
        return await this.connection.execute(`insert into clientes (nome,telefone,cpf,endereco,bairro,cidade,rg) values ('${nome}','${telefone}','${cpf}','${endereco}','${bairro}','${cidade}',${rg})`)
    }

    async deletClient(id){
        return await this.connection.execute(`delete from clientes where id = '${id}'`)
    }

    async findClient(id){
        return await this.connection.execute(`select * from clientes where id = '${id}'`)
    }

    async insertCommand(id,command){
        if(command==''){
            return await this.connection.execute(`UPDATE clientes SET comanda = null WHERE id = '${id}'`)
        }else{
            return await this.connection.execute(`UPDATE clientes SET comanda = ${command} WHERE id = '${id}'`)
        }
    }

    async editClient(id,nome, telefone, cpf, endereco, bairro, cidade, rg){
        return await this.connection.execute(`UPDATE clientes SET nome = '${nome}',cidade = '${cidade}',rg = ${rg},cpf = ${cpf},endereco = '${endereco}',bairro = '${bairro}',telefone = ${telefone} WHERE id = '${id}'`)
    }
}