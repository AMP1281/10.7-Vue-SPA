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
                            <b-button @click="aumentar(item.id);sumar()"> Detalls</b-button>
                            
                            </router-link>
                            {{numeroUsers}}
                            {{param}}

                            {{asignarClick}}

                            {{}}

                      </p>

                    </div>

                  </div>

              </li>

          </ul>

    </div>

</template>

<script>

import {mapState, mapActions, mapMutations} from 'vuex'

export default {

    name:'ClienteComp',

    methods:{
        ...mapActions(['getUsers']),
        ...mapMutations(['aumentar','newProperty']),

        sumar(){

            this.test2.push(this.param);
            console.log(this.test2);



            // this.test[this.param] = this.test[this.param];
         
            // console.log(this.test);

            //  return this.asignarClick.CLICKS += 1;
        }

    },

    computed:{
        ...mapState(['usuariosArreglo', 'numeroUsers','param','test','test2']),

        asignarClick(){
            return this.$store.getters['getCliente'](this.param)
        },

    },

    //llamamos a la action q tenemos en store y trae los usuarios
    mounted(){
        this.$store.dispatch('getUsers');
    }


}

</script>
