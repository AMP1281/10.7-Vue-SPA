<template>

  <div>

    <h1>Clients</h1>

        <router-link :to="{name:'Clients', params:{id: item}}"

          v-for="(item, index) of clientesArreglo" :key="index">

          <button>cliente {{item}}</button>

        </router-link>


        <ClienteComp/>

<!--     <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button> -->

  </div>

</template>

<script>

import ClienteComp from '@/components/ClienteComp.vue'

export default {
  name:'Clients',
  components: {
    ClienteComp
  },
  data(){
    return{
      clientesArreglo:[1, 2, 3]
    }
  },
  methods:{
    home(){
      this.$router.push('/')
    },
    anterior(){
      this.$router.go(-1)
    },
    siguiente(){
      this.$router.go(1)
    }
  }
}
</script>