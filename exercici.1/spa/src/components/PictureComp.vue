 <template>
 
    <div>
            
        <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="item in getDuplicated" :key="item.id">

                  <div class="card text-center w-100 h100">
                        <h5 class="card-header py-4 h-50">
                                Album: {{item.albumId}}</h5>

                        <div class="card-body py-5 h-50">

                                <p class="card-text">
                                    <router-link :to="{name:'PicDetails',params:{id:item.id}}">
                                    <b-button>Detalls</b-button>
                                    </router-link>
                                </p>
                        </div>

                  </div>

              </li>

          </ul>

    </div>
</template>

<script>

import {mapState, mapActions, mapGetters} from 'vuex'

export default {

    name:'PictureComp',

    methods:{
        ...mapActions(['getPictures']),
    },

    computed:{
        ...mapState(['picturesArreglo']),
        ...mapGetters(['getDuplicated']),
    },

    mounted(){
        this.$store.dispatch('getPictures'); //llamamos a la action q tenemos en store y trae los usuarios
    },

}

</script>

<style scoped>


</style>