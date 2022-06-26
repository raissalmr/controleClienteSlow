<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
            <v-card-title>
            <span class="headline">Credenciais</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field v-model='user' align='center' clearable hide-details="auto" required>

                    </v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field v-model='password' type='password'  align='center' clearable hide-details="auto">

                    </v-text-field>
                </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="authenticate">
            Autenticar
            </v-btn>  
            </v-card-actions>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */
    export default {
        components:{},
        data(){
            return{
                dialog: true,
                user: '',
                password: ''
            }
        },
        methods:{
            authenticate(){
                console.log(this.user,this.password)
                axios.post('http://localhost:3000/login', {
                    "user" : this.user,
                    "password": this.password
                })
                .then((res)=>{
                    console.log(res)
                    if(res.data){
                        console.warn('Usuario validado')
                        this.dialog = false
                        this.$store.state.authenticate = true
                    }else{
                        console.error('Usuario errado')
                    }
                })
            }
        }
    }
</script>
