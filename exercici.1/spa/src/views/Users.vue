<template>

      <div>

            <b-container class="animate__animated animate__fadeIn">

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

}

</script>