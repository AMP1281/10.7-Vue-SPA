import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuariosArreglo:[],
    picturesArreglo:[],
    str:'',
  },
  getters:{
    getCliente: (state) => (id) => {
      return state.usuariosArreglo.find(client => client.id === id)
    },
  },
  mutations: {
    SET_USERS(state, users){
       state.usuariosArreglo = users
     },
    SET_PICTURES(state, pictures){
      state.picturesArreglo = pictures
    },
    changeKey(){
      this.str = JSON.stringify(this.picturesArreglo);
      this.str = this.str.replace(/"username":/g, "\"id\"header");
      this.picturesArreglo = JSON.parse(this.str);
    }
            /*llenarUsuarios(state,usuariosAccion){
                state.usuariosArreglo = usuariosAccion //llena el array
            } */
  },
  actions: {
    getUsers({ commit }) {
      axios.get('http://jsonplaceholder.typicode.com/users')
          .then(response => {
              commit('SET_USERS', response.data)
          })
    },
    getPictures({ commit }) {
      axios.get('http://jsonplaceholder.typicode.com/photos')
          .then(response => {
              commit('SET_PICTURES', response.data)
          })
    } 
  },
          /*getUsers: async function({commit}){
              const data = await fetch ('http://jsonplaceholder.typicode.com/users'); //llamamos a la api
              const usuarios = await data.json();//guardamos en la const usuarios
              commit('llenarUsuarios', usuarios)
          }*/
})
