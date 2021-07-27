
 <template>

  <div style="width: 100%">

    <div class="d-flex flex-column justify-content-start align-items-center">

                <b-card class="sombra">
                    <b-card-text class="d-flex flex-column align-items-center">
                        <h5 class="mb-4">{{encontrarCliente.name}}</h5>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Email:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.email}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Telefon:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.phone}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Web:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.website}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Calle:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.address.street}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Apartamento:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.address.suite}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    CP:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.address.zipcode}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Ciudad:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.address.city}}
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
    name:'ClienteDetalles',

    data(){
      return{
            id:this.$route.params.id
      }
    },

    computed:{

    ...mapState(['usuariosArreglo']),
    ...mapGetters(['getCliente']),

    encontrarCliente(){
            return this.$store.getters['getCliente'](this.id)
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
