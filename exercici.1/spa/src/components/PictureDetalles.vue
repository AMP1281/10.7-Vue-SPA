
 <template>

  <div style="width: 100%">







                    {{encontrarImagen.title}}

                    {{encontrarImagen.url}}

 


</div>

</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
    name:'PictureDetalles',

    data(){
      return{
            idPic:this.$route.params.id
      }
    },

    computed:{

    ...mapState(['picturesArreglo']),
    ...mapGetters(['getPicture']),

    encontrarImagen(){
            return this.$store.getters['getPicture'](this.idPic)
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