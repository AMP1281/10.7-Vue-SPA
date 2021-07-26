<template>

  <div>

    <b-container>

      <h1 class="my-4 d-flex flex-row justify-content-center align-items-center">Botiga</h1>




                  <b-button-group size="sm" class="d-flex flex-row justify-content-center align-items-center">
                    <b-button @click="switchComponent('alimetacio')" class="boton" variant="outline-info">Alimentació </b-button>
                    <b-button @click="switchComponent('congelats')" class="boton" variant="outline-info">Congelats </b-button>
                  </b-button-group>
    </b-container>

  </div>

</template>

<script>


</script>


<style scoped>

.boton {
  font-size: 1.5rem;
  color:rgb(42, 42, 42) !important;
}

</style>


