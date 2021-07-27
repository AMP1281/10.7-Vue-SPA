<template>

  <div>

        <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="item in picturesArreglo" :key="item.id">

                  <div class="card text-center w-100">
                    <h5 class="card-header py-4">
                      {{item.id}}</h5>

                    <div class="card-body py-5">

                      <p class="card-text">
                            <router-link :to="{name:'Details',params:{id:item.id}}">
                            <b-button>Detalls</b-button>
                            </router-link>
                        </p>
                    </div>

                  </div>

              </li>

          </ul>
<CompReus/>
    </div>

</template>

<script>

import CompReus from '@/components/CompReus.vue'
import {mapState, mapActions} from 'vuex'

export default {

  name:'Pictures',

  components: {
    CompReus,
  },
    methods:{
        ...mapActions(['getPictures']),
        mostrarDetall(){
            this.$router.push({name:'ClienteDetalles'})
        },
    },

    computed:{
        ...mapState(['picturesArreglo']),
    },

    mounted(){
        this.$store.dispatch('getPictures'); //llamamos a la action q tenemos en store y trae los usuarios
    }
  }