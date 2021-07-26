<template>

    <div>

        <b-container>

            <div class="d-flex flex-column justify-content-start align-items-center">


                <ButtonAnterior/>

                <!-- <p>The client is:{{this.$route.params.id}}</p> -->


                <b-card class="sombra">
                    <b-card-text class="d-flex flex-column align-items-center">
                        <h5 class="mb-4">{{encontrarCliente.nomClient}}</h5>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Email
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.mailClient}}
                                </div>
                            </div>
                            <div class="row w-100  py-2">
                                <div class="col-6">
                                    Telefon:
                                </div>
                                <div class="col-6">
                                    {{encontrarCliente.telClient}}
                                </div>
                            </div>

                    </b-card-text>
                </b-card>
            </div>
        </b-container>

    </div>

</template>

<script>
import ButtonAnterior from '@/components/ButtonAnterior.vue'
import {mapState, mapGetters} from 'vuex'

export default{
   components: {
    ButtonAnterior,
  },
    data(){
        return{
            clienteId:this.$route.params.id
        }
    },
    computed:{

        ...mapState(['clientesArreglo']),
        ...mapGetters(['getCliente']),

        encontrarCliente(){
            return this.$store.getters['getCliente'](this.clienteId)
        },

    }

    }


</script>

<style scoped>
.sombra {
    width: 30% !important;
    box-shadow: 6px 6px 5px 1px #e7e5e5 !important;
    margin-top: 2rem;
}


</style>
