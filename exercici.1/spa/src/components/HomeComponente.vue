<template>

<div style="width: 100%">

              <div class="row d-flex flex-row justify-content-center align-items-stretch">

                            <b-card class="col-sm-4 mx-4 my-5 py-2">

                                  <b-card-text class="d-flex flex-column align-items-center">

                                      <h5 class="mb-4 px-5 font-weight-bold">Users Consulted</h5>

                                          <ul class="row w-100">

                                              <li class="col-md-12 mt-2 d-flex justify-content-between align-items-stretch" 
                                              v-for="(value, name) in repetidosUsu" :key="value">

                                                  <p> {{ name }}</p>
                                                  <p> {{ value }}</p>

                                              </li>
                                              
                                          </ul>

                                  </b-card-text>

                            </b-card>

                            <b-card class="col-sm-4 mx-4 my-5 py-2">

                              <b-card-text class="d-flex flex-column align-items-center">

                                  <h5 class="mb-4 px-5 font-weight-bold">Albums Consulted</h5>

                                      <ul class="row w-100">

                                          <li class="col-md-12 mt-2 d-flex justify-content-between align-items-stretch" 
                                          v-for="(value, name) in repetidosPic" :key="value">

                                              <p> Album {{ name }} </p>
                                              <p> {{ value }} </p>

                                          </li>
                                          
                                      </ul>

                              </b-card-text>

                        </b-card>

              </div>

</div>

</template>

<script>

import {mapState} from 'vuex'

export default {

    data(){

      return{
        repetidosUsu:'',
        repetidosPic:'',
      }

    },

    name:'HomeComponente',

    computed:{
    ...mapState(['clickUsuarios','clickPic']),
    },

    mounted(){

      //Cuenta los clicks de cada usuario(clickUsuarios viene de store)
      this.repetidosUsu = this.clickUsuarios.reduce((countUsers, users)=>
      {countUsers[users] = (countUsers[users] || 0) +1; return countUsers},
      {});

      //Cuenta los clicks de cada album(clickPic viene de store)
      this.repetidosPic = this.clickPic.reduce((countPics, pics)=>
      {countPics[pics] = (countPics[pics] || 0) +1; return countPics},
      {});

     },

}



</script>
