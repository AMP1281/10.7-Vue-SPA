<template>

    <div>

        <b-container class="animate__animated animate__fadeIn">

            <div class="d-flex flex-column justify-content-start align-items-center">

                <ButtonAnterior/>

                <ClienteDetalles/>

            </div>

        </b-container>

    </div>

</template>

<script>
import ClienteDetalles from '@/components/ClienteDetalles.vue'
import ButtonAnterior from '@/components/ButtonAnterior.vue'


export default{
   components: {
    ButtonAnterior,
    ClienteDetalles
  },
}

</script>


