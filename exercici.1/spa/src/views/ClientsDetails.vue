<template>

    <div>

        <b-container>

        <!-- <p>The client is:{{this.$route.params.id}}</p> -->
        <div class="card text-center pt-4 mt-5">
        <p>Nom client: {{encontrarCliente.nomClient}}</p>
        <p>E.mail client: {{encontrarCliente.mailClient}}</p>
        <p>Telefon client: {{encontrarCliente.telClient}}</p>
        </div>
        </b-container>

    </div>

</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default{
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
