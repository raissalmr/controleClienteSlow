<template>
    <div>
        <v-dialog v-model="dialog" max-width='600px'>
        <v-card>
            <v-card-title>
            <span class="headline">Adicionar Usuario</span>
            </v-card-title>
             <v-card-text>
            <v-container>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='nome' label='Nome' align='center' clearable hide-details="auto" required>

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='cpf' label='CPF' type='number' align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='rg' label='RG'   align='center' type='number'  clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='telefone' label='Telefone' type='number'  align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='endereco' label='Endereço'  align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='bairro' label='Bairro' align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='cidade' label='Cidade' align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color='green' @click="addUser">
                Salvar
            </v-btn>  
            </v-card-actions>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
    export default {
        components:{},
        data(){
            return{
                dialog: false,
                nome:'',
                telefone:'',
                cpf:'',
                rg:'',
                endereco:'',
                bairro:'',
                cidade:'',
            }
        },
        methods:{
            addUser(){
                if(this.nome!=''&&this.telefone!=''&&this.cpf!=''&&this.rg!=''&&this.endereco!=''&&this.bairro!=''&&this.cidade!=''){
                    axios.post('http://localhost:3000/clientes',{
                        "nome":this.nome,
                        "telefone":this.telefone,
                        "cpf" : this.cpf,
                        "endereco": this.endereco,
                        "bairro": this.bairro,
                        "cidade": this.cidade,
                        "rg":this.rg
                    })
                    .then(()=>{
                        this.$store.state.userAdded = true
                        this.dialog = false
                        this.nome = ''
                        this.telefone= ''
                        this.cpf= ''
                        this.endereco= ''
                        this.bairro= ''
                        this.cidade= ''
                        this.rg= ''
                    })
                }
            }
        },
        computed:{
            show(){
                return this.$store.state.showAddUser
            }
        },
        watch:{
            show(newValue){
                if(newValue){
                    this.dialog = true
                    this.$store.state.showAddUser = false
                }
            }
        }
    }
</script>
