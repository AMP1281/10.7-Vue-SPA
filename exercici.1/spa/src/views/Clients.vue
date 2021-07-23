<template>

  <div>

    <b-container>

      <ButtonAnterior/>

        

      <h1 class="mt-2">Clients</h1>


    
      <ClienteComp/>



    </b-container>

  </div>

</template>

<script>
import ButtonAnterior from '@/components/ButtonAnterior.vue'
import ClienteComp from '@/components/ClienteComp.vue'


export default {
  name:'Clients',

  components: {
    ClienteComp,
    ButtonAnterior,

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