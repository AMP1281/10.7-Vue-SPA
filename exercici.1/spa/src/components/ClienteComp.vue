 <template>
 
    <div>

        <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center animate__animated animate__fadeIn" 
              v-for="item in resultados" :key="item.id">

                  <div class="card text-center w-100">

                    <h5 class="card-header py-4">
                      {{ item.name | capitalize }}</h5>

                    <div class="card-body py-5">

                      <p class="card-text">

                            <router-link :to="{ name:'Details', params:{ id:item.id } }">

                            <b-button @click="aumentar(item.name);pushUsu()"> Detalls</b-button>

                            </router-link>

                      </p>

                    </div>

                  </div>

              </li>

          </ul>

          <div v-if="resultados.length<1">

              <p class="alert alert-danger">Usuario no encontrado</p>

          </div>

    </div>

</template>

<script>

import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'

export default {

    name:'ClienteComp',

    methods:{

        ...mapActions(['getUsers']),
        ...mapMutations(['aumentar']),

        //Añado el nombre del usuario q hace click en el array clickUsuarios
        pushUsu(){
            this.clickUsuarios.push(this.paramUsu);
        }

    },

    computed:{

        ...mapState(['paramUsu','clickUsuarios']),
        ...mapGetters(['resultados'])

    },

    //Pone el nombre en mayusculas
    filters:{
            capitalize: function (value) {
                return value.toUpperCase()
            }
    },

    //llamamos a la action q tenemos en store y trae los usuarios
    mounted(){
        this.$store.dispatch('getUsers');
    }

}

</script>
