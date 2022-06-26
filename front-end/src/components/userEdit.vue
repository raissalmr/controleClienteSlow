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
                    <v-text-field v-model='client.nome' label='Nome' align='center' clearable hide-details="auto" required>

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='client.cpf' label='CPF' type='number' align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='client.rg' label='RG'   align='center' type='number'  clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='client.telefone' label='Telefone' type='number'  align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='client.endereco' label='Endereço'  align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='client.bairro' label='Bairro' align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='client.cidade' label='Cidade' align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color='green' @click="editUser">
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
            }
        },
        methods:{
            editUser(){
                if(this.client.nome!=''&&this.client.telefone!=''&&(this.client.cpf!=''||this.client.rg!='')&&this.client.endereco!=''&&this.client.bairro!=''&&this.client.cidade!=''){
                    axios.post('http://localhost:3000/editClient',{
                        "id":this.client.id,
                        "nome":this.client.nome,
                        "telefone":this.client.telefone,
                        "cpf" : this.client.cpf,
                        "endereco": this.client.endereco,
                        "bairro": this.client.bairro,
                        "cidade": this.client.cidade,
                        "rg":this.client.rg
                    })
                    .then(()=>{
                        this.$store.state.userAdded = true
                        this.dialog = false
                    })
                }
            }
        },
        computed:{
            client(){
                return this.$store.state.clientEdit
            }
        },
        watch:{
            client(newValue){
                if(newValue!=false){
                    console.log(newValue)
                    this.dialog = true
                }
            }
        }
    }
</script>
