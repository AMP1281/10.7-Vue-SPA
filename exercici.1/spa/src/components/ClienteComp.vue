 <template>
    <div>

        <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="item in clientesArreglo" :key="item.idClient">

                  <div class="card text-center w-100">
                    <h5 class="card-header py-4">
                      {{item.nomClient}}</h5>

                    <div class="card-body py-5">

                      <p class="card-text">
                            <router-link :to="{name:'Details',params:{id:item.idClient}}">
                            <b-button>Detalls</b-button>
                            </router-link>
                        </p>
                    </div>

                  </div>

              </li>

          </ul>
        
        <!--Pasamos de forma dinamica info al componente por url. Pinta el parametro que pasamos (id)-->
        <h1>Cliente desde componente: {{ $route.params.id }} </h1>

    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

    name:'ClienteComp',

    methods:{
        mostrarDetall(){
            this.$router.push({name:'ClienteDetalles'})
        },
    },

    computed:{
        ...mapState(['clientesArreglo']),
    }
}

</script>
 */