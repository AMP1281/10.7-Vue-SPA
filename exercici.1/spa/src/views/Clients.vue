<template>

  <div>

    <b-container>


      <h1 class="mt-4 d-flex justify-content-center">Clients</h1>

      <ClienteComp/>



    </b-container>

  </div>

</template>

<script>

import ClienteComp from '@/components/ClienteComp.vue'


export default {
  name:'Clients',

  components: {
    ClienteComp,

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
  },
}
</script>