<template>
  <v-app>
    <loginDialog/>
    <usersScreen/>
  </v-app>
</template>

<script>
/* eslint-disable */
import loginDialog from './components/loginDialog.vue'
import usersScreen from './components/usersScreen.vue'

export default {
  name: 'App',
  components: {
    loginDialog, 
    usersScreen
  },
  computed:{
  },
};
</script>

<style>
  ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
  }
</style>
