<template>

  <div>

    <b-container>

      <h1 class="my-4 d-flex flex-row justify-content-center align-items-center">Botiga</h1>




                  <b-button-group size="sm" class="d-flex flex-row justify-content-center align-items-center">
                    <b-button @click="curr = true" class="boton" variant="outline-info">Alimentació </b-button>
                    <b-button @click="curr = false" class="boton" variant="outline-info">Congelats </b-button>
                  </b-button-group>

          <component v-bind:is="current"/>

    </b-container>

  </div>

</template>

<script>

const aliment = () => import ('../views/Alimentacio.vue')
const congel = () => import ('../views/Congelats.vue')

export default {
  name:'Botiga',
  data(){
    return{
      curr:''
    }
  },

computed:{
  current(){
    if(this.curr == true) {
      return aliment;
    }
    return congel;
  }
}
}

    

</script>


<style scoped>

.boton {
  font-size: 1.5rem;
  color:rgb(42, 42, 42) !important;
}

</style>


