import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    usuariosArreglo:[],
    picturesArreglo:[],
    paramUsu:0,//Nombre último click usuario
    clickUsuarios:[],//Acumula todos los nombres de los clicks
    paramPic:'',
    clickPic:[],
    inputBuscador:'',
    buscarNombre:'',
    soloNombre:''

  },
  
  getters:{

    //Devuelve usuario con id que indiquemos
    getCliente: (state) => (id) => {
      return state.usuariosArreglo.find(usuario => usuario.id === id)
    },

    //Devuelve un array sin albumId duplicado
    getDuplicated: state => {
      return state.picturesArreglo.filter((album, index, self) => index === self.findIndex((obj)=>(obj.albumId === album.albumId)))},
    
    //Encuentra por nombre
    getUsuName:(state)=>(name)=> {
      return state.usuariosArreglo.filter(x=>x.name.toLowerCase().indexOf(name.toLowerCase())>-1)
    },

    //Encuentra concretamente por el nombre del inputBuscador
    buscarNombre:(state, getters) => {
      return getters.getUsuName(state.inputBuscador);
    },

    //Es la lógica del v-for Cliente Detalles 
    resultados(state,getters){
      if(state.inputBuscador === ""){
          return state.usuariosArreglo
      }
      if(state.inputBuscador.length>1 && state.inputBuscador!== ""){
          return getters.buscarNombre
      }
      else{
          return false
      }
    },

    //Es la lógica del v-for Autocomplete
    resultAutocomplete(state,getters){
      if(state.inputBuscador.length>1 && state.inputBuscador!== ""){
          return getters.buscarNombre
      }
      else{
        return false
      }
    }

  },

  mutations: {

    SET_USERS(state, users){
       state.usuariosArreglo = users;
     },

    SET_PICTURES(state, pictures){
      state.picturesArreglo = pictures
    },

    aumentar(state, paramID){
      state.paramUsu = paramID //param tiene el nombre del último click usu
    },

    aumentarPic(state, paramPicID){
      state.paramPic = paramPicID 
    },

    SET_BUSCADOR(state,param){
      state.inputBuscador = param
    },

            /*llenarUsuarios(state,usuariosAccion){
                state.usuariosArreglo = usuariosAccion //llena el array
            } */

  },

  actions: {

    getUsers({ commit }) {
      axios.get('http://jsonplaceholder.typicode.com/users')
          .then(response => {
              commit('SET_USERS', response.data);
          })
          .catch(function(error){
            alert(error);
          })
    },

    getPictures({ commit }) {
      axios.get('http://jsonplaceholder.typicode.com/photos')
          .then(response => {
              commit('SET_PICTURES', response.data)
          })
          .catch(function(error){
            alert(error);
          })
    },

  },

          //Llamar con async-await
          /*getUsers: async function({commit}){
              const data = await fetch ('http://jsonplaceholder.typicode.com/users'); //llamamos a la api
              const usuarios = await data.json();//guardamos en la const usuarios
              commit('llenarUsuarios', usuarios)
          }*/

})
