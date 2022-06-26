<template>
    <div>
        <v-dialog v-model="dialog" max-width='600px' persistent>
        <v-card>
            <v-card-title>
            <span class="headline">Adicionar Comanda</span>
            </v-card-title>
             <v-card-text>
            <v-container>
                <v-row>
                <v-col
                >
                    <v-text-field v-model="client.nome" disabled label='Nome' align='center' clearable hide-details="auto" required>
                        
                    </v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col
                >
                    <v-text-field v-model='client.comanda' label='Comanda' type='number' align='center' clearable hide-details="auto" required>
                    </v-text-field>
                </v-col>
                </v-row>

            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color='green' @click="save">
                Salvar
            </v-btn>  
            <v-btn color='red' @click="cancel">
                Voltar
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
            cancel(){
                this.dialog = false
                this.$store.state.addCommnad = false

            },
            save(){
                axios.post('http://localhost:3000/addCommand',{
                    'id':this.client.id,
                    'command':this.client.comanda
                })
                .then(()=>{
                    this.dialog = false
                    this.$store.state.addCommnad = false
                })
            }
        },
        computed:{
            client(){
                return this.$store.state.addCommnad
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
