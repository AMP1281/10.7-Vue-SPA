
 <template>

  <div style="width: 100%">

            <ul class="row list-unstyled">

              <li class="col-md-3 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="item in filtrar" :key="item.id">

                  <div class="card text-center">

                       <img :src="item.url" :alt="item.title" class="card-img-top">

                        <div class="card-body">

                                <h5 class="card-title">{{ item.title }}</h5>

                        </div>

                  </div>

              </li>

            </ul>

  </div>

</template>

<script>

import {mapState} from 'vuex'

export default {

    name:'PictureDetalles',

    data(){
        return{
            albumId:this.$route.params.id
        }
    },

    computed:{

        ...mapState(['picturesArreglo']),

        //Filtra en picturesArreglo los objetos con propiedad albumId = al albumId q pasamos por url. Luego muestro en template las imagenes solo de esos objetos filtrados.
        filtrar(){
            return this.picturesArreglo.filter(x => x.albumId == this.albumId)
        }

    }

}

</script>

<style scoped>


</style>