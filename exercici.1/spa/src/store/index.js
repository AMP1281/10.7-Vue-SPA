import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    clientesArreglo: [
      {
        nomClient:"Carme Montserrat",
        mailClient:"carme@email.com",
        telClient: 658111111,
        idClient: 1
      },
      {
        nomClient:"Rosa Montserrat",
        mailClient:"rosa@email.com",
        telClient: 658222222,
        idClient: 2
      },
      {
        nomClient:"Anna Montserrat",
        mailClient:"anna@email.com",
        telClient: 658333333,
        idClient: 3
      }
      ]
  },
  getters:{
    getCliente: (state) => (idClient) => {
      return state.clientesArreglo.find(client => client.idClient === idClient)
    },
  },
  mutations: {
    SET_USERS(state, users){
      state.users = users
    }
  },
  actions: {
    getUsers({ commit }) {
      axios.get('http://jsonplaceholder.typicode.com/users')
          .then(response => {
              commit('SET_USERS', response.data)
      })
  }
  },
  modules: {
  }
})
