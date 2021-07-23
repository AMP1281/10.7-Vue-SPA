<template>
    <div>
        <p>The client is:{{this.$route.params.id}}</p>

        <li class="col-lg-4 mt-4 d-flex align-items-stretch justify-content-center" 
                    v-for="(item, index) in encontrarCliente()" :key="index">

                    <h5>{{item.nomClient}}</h5>
        </li>
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

        computed:{
        ...mapState(['clientesArreglo']),
        ...mapGetters(['getCliente']),
        },

        encontrarCliente(){
            return this.$store.getters['getCliente'](this.clienteId);
        },

    }

    }


</script>
