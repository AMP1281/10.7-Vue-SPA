 <template>
 
    <div>
            
        <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="item in getDuplicated" :key="item.id">

                  <div class="card text-center w-100 h100">

                        <h5 class="card-header py-4 h-50">
                                Album: {{ item.albumId }}</h5>

                        <div class="card-body py-5 h-50">

                                <p class="card-text">
                                    <router-link :to="{name:'PicDetails',params:{id:item.albumId}}">
                                    <b-button @click="aumentarPic(item.albumId);pushPic()"> Detalls</b-button>
                                    </router-link>
                                </p>
                        </div>

                  </div>

              </li>

          </ul>

    </div>

</template>

<script>

import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {

    name:'PictureComp',

    methods:{

        ...mapActions(['getPictures']),
        ...mapMutations(['aumentarPic']),

        pushPic(){
            this.clickPic.push(this.paramPic);
        },

    },

    computed:{
        ...mapGetters(['getDuplicated']),
        ...mapState(['picturesArreglo','paramPic','clickPic'])
    },

    mounted(){
        this.$store.dispatch('getPictures');
    },

}

</script>

<style scoped>


</style>