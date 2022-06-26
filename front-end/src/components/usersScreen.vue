<template>
    <div>
        <v-dialog v-model="dialog" persistent scrollable>
        <v-card>
            <v-card-title>
                <v-row justify='space-between'>
                    <v-col  md="4">
                        Clientes
                    </v-col>
                    <v-col  md="4" offset-md="4">
                        <v-btn small color='primary' @click="showAdd">
                            Adicionar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Nome
                    </th>
                    <th class="text-left">
                        CPF
                    </th>
                    <th class="text-left">
                        Ações
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="client in clients"
                    :key="client.id"
                    >
                    <td>{{ client.nome }}</td>
                    <td>{{ client.cpf }}</td>
                    <td><v-row>
                        <v-col>
                            <v-btn v-if="client.comanda==null||client.comanda=='null'" @click="addCommand(client)" small color='success'>
                                Comanda
                            </v-btn>
                            <v-btn v-else small @click="addCommand(client)" color='red'>
                                Comanda
                            </v-btn>
                        </v-col>
                        
                        <v-col>
                            <v-btn small @click="userEdit(client)" color='warning'>
                                Editar
                            </v-btn>
                        </v-col>
                        
                        <v-col>
                            <v-btn small color='red' @click="clientDelete = client">
                                Excluir
                            </v-btn>
                        </v-col>
                        </v-row>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-card>
        </v-dialog>
        <userAdd/>
        <commandScreen/>
        <userEdit/>
        <v-dialog v-model="test" max-width='400px'>
            <v-card>
                <v-card-text>
                    Deseja Apagar o Usuario {{clientDelete.nome}}
                </v-card-text>
                <v-card-actions>
                    <v-btn small color='red' @click="deleteUser(clientDelete)">
                        Excluir
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
/* eslint-disable */
import userAdd from './userAdd.vue'
import commandScreen from './commandScreen.vue'
import userEdit from './userEdit.vue'
import axios from 'axios'
import App from '../App.vue'
    export default {
        components:{
            App,
            userAdd,
            commandScreen,
            userEdit
        },
        data(){
            return{
                dialog:false,
                clients:[],
                test:false,
                clientDelete:false
            }
        },
        methods:{
            deleteUser(client){
                axios.post('http://localhost:3000/deleteClient',{'id':client.id})
                .then((res)=>{
                    this.clients = res.data
                    console.log(this.clients)
                    this.getClients()
                    this.test = false
                })
            },
            getClients(){
                axios.get('http://localhost:3000/clientes')
                .then((res)=>{
                    this.clients = res.data
                    console.log(this.clients)
                })
            },
            showAdd(){
                this.$store.state.showAddUser = true
            },
            addCommand(client){
                this.$store.state.addCommnad = client
            },
            userEdit(client){
                this.$store.state.clientEdit = client
            }
        },
        computed:{
            authenticate(){
                return this.$store.state.authenticate
            },
            userAdded(){
                return this.$store.state.userAdded
            },
            addCommandRenew(){
                return this.$store.state.clientEdit 
            },
            command(){
                return this.$store.state.addCommnad
            }
        },
        watch:{
            command(newValue){
                if(!newValue){
                    this.getClients()
                }
            },
            clientDelete(newValue){
                this.test = true
            },
            addCommandRenew(newValue){
                if(!newValue){
                    this.getClients()
                }
            },
            authenticate(newValue){
                console.log(newValue)
                if(newValue){
                    this.dialog = true
                    this.getClients()
                }
            },
            userAdded(newValue){
                console.log(newValue)
                if(newValue){
                    this.getClients()
                    this.$store.state.userAdded = false
                }
            }
        }
    }
</script>