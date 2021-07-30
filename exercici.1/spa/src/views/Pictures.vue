<template>

  <div>

    <b-container class="animate__animated animate__fadeIn">

        <div class="mt-2 d-flex justify-content-center">

            <ButtonAnterior/>

        </div>

        <h1 class="mt-4 d-flex justify-content-center">Pictures</h1>

            <PictureComp/>

    </b-container>

  </div>

</template>

<script>

import ButtonAnterior from '@/components/ButtonAnterior.vue'
import PictureComp from '@/components/PictureComp.vue'

export default {
  name:'Pictures',

  components: {

    PictureComp,
    ButtonAnterior

  },

}
</script>