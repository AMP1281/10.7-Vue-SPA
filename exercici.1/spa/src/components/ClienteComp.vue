 <template>
 
    <div>

        <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="item in usuariosArreglo" :key="item.id">

                  <div class="card text-center w-100">

                    <h5 class="card-header py-4">
                      {{ item.name }}</h5>

                    <div class="card-body py-5">

                      <p class="card-text">

                            <router-link :to="{name:'Details',params:{id:item.id}}">
                            <!-- <b-button @click="aumentar(item.id)"> Detalls</b-button> -->
                            <ButtonAumentar/>

                            </router-link>

                            {{numeroUsers}}
                            {{param}}

                      </p>

                    </div>

                  </div>

              </li>

          </ul>

    </div>

</template>

<script>

import ButtonAumentar from '@/components/ButtonAumentar.vue'

import {mapState, mapActions} from 'vuex'

export default {

    name:'ClienteComp',

    components: {
        ButtonAumentar
    },

    methods:{
        ...mapActions(['getUsers']),
    },

    computed:{
        ...mapState(['usuariosArreglo', 'numeroUsers','param']),

    },

    //llamamos a la action q tenemos en store y trae los usuarios
    mounted(){
        this.$store.dispatch('getUsers');
    }

}

</script>
