
 <template>

  <div style="width: 100%">

    <div class="d-flex flex-column justify-content-start align-items-center">

                <b-card class="sombra">
                    <b-card-text class="d-flex flex-column align-items-center">
                        <h5 class="mb-4">{{encontrarImagen.title}}</h5>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Email:
                                </div>
                                <div class="col-6">
                                    {{encontrarImagen.id}}
                                </div>
                            </div>

                    </b-card-text>
                </b-card>
    </div>

  </div>

</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
    name:'PictureDetalles',

    data(){
      return{
            id:this.$route.params.id
      }
    },

    computed:{

    ...mapState(['picturesArreglo']),
    ...mapGetters(['getPictures']),

    encontrarImagen(){
            return this.$store.getters['getPictures'](this.id)
        },

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