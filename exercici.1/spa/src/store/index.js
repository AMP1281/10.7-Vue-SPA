import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    usuariosArreglo:[],
    picturesArreglo:[],
    paramUsu:0,//Nombre último click usuario
    clickUsuarios:[],//Acumula nombres de los clicks
    paramPic:'',
    clickPic:[],
    inputBuscador:'',
    buscarNombre:''
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
    buscarNombre:(state)=>{
      return state.getters.getUsuName(state.inputBuscador);
    },

  },

  mutations: {

    SET_USERS(state, users){
       state.usuariosArreglo = users;
     },

    SET_PICTURES(state, pictures){
      state.picturesArreglo = pictures
    },

    aumentar(state, paramID){
      state.paramUsu = paramID //param tiene el nombre del último click
    },

    aumentarPic(state, paramPicID){
      state.paramPic = paramPicID 
    },

    SET_BUSCADOR(state,param){
      state.inputBuscador = param
    },

    buscarNombre(state){
      return state.getters.getUsuName(state.inputBuscador);
    },
    
    resultados(state){
      if(state.inputBuscador === ""){
          return state.usuariosArreglo
      }
      if(state.inputBuscador.length>2 && state.inputBuscador!== ""){
          return state.buscarNombre
      }
      else{
          return false
      }
  }

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
    },

    getPictures({ commit }) {
      axios.get('http://jsonplaceholder.typicode.com/photos')
          .then(response => {
              commit('SET_PICTURES', response.data)
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
