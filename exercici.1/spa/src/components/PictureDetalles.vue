
 <template>

  <div style="width: 100%">

            <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="item in filtrar" :key="item.id">

                  <div class="card text-center w-100 h100">
                        <h5 class="card-header py-4 h-50">
                                {{item.id}}</h5>

                        <div class="card-body py-5 h-50">

                                <p class="card-text">

                                </p>
                        </div>

                  </div>

              </li>

          </ul>

 


</div>

</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
    name:'PictureDetalles',

    data(){
      return{
            albumId:this.$route.params.id
      }
    },

    computed:{

    ...mapState(['picturesArreglo']),
    ...mapGetters(['getPicture']),

    encontrarImagen(){
            return this.$store.getters['getPicture'](this.albumId)
        },
    
    filtrar(){
        return this.picturesArreglo.filter(x => x.albumId == this.albumId)
    }

    }
}

</script>

<style scoped>


.sombra {
    box-shadow: 6px 6px 5px 1px #e7e5e5;
    margin-top: 2rem;
    width: 40%;
}


</style>