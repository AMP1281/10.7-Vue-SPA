import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    usuariosArreglo:[],
    picturesArreglo:[],
    numeroUsers: 0,
    param:0
  },
  
  //Obtenemos una copia del state, no modifica
  getters:{

    //Devuelve usuario con id que indiquemos
    getCliente: (state) => (id) => {
      return state.usuariosArreglo.find(usuario => usuario.id === id)
    },

    //Devuelve un array sin albumId duplicado
    getDuplicated: state => {
      return state.picturesArreglo.filter((album, index, self) => index === self.findIndex((obj)=>(obj.albumId === album.albumId)))},

  },

  mutations: {

    SET_USERS(state, users){
       state.usuariosArreglo = users
     },

    SET_PICTURES(state, pictures){
      state.picturesArreglo = pictures
    },

    aumentar(state, paramID){
      state.numeroUsers++ ;
      state.param = paramID
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

          //Llamar con async-await
          /*getUsers: async function({commit}){
              const data = await fetch ('http://jsonplaceholder.typicode.com/users'); //llamamos a la api
              const usuarios = await data.json();//guardamos en la const usuarios
              commit('llenarUsuarios', usuarios)
          }*/

})
