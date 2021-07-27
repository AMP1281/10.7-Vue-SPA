<template>

      <div>

            <b-container>
                  <div class="mt-2 d-flex justify-content-center">
                      <ButtonAnterior/>
                  </div>
                  <h1 class="mt-4 d-flex justify-content-center">Users</h1>

                      <ClienteComp/>

            </b-container>

      </div>

</template>

<script>
import ButtonAnterior from '@/components/ButtonAnterior.vue'
import ClienteComp from '@/components/ClienteComp.vue'


export default {
  name:'Users',

  components: {
    ClienteComp,
    ButtonAnterior
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