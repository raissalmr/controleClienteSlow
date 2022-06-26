import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    authenticate:false,
    showAddUser:false,
    userAdded:false,
    clientEdit:false,
    addCommnad:false
  }
})

export default store
