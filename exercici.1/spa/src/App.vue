<template>
  <div id="app">

      <Navegacion/>

      <router-view/> <!--Carga las vistas donde estas (botiga, clients..) dinamicamente aquí-->

  </div>
</template>

<script>
import Navegacion from '@/components/Navegacion';


export default{
  name:'App',
  components:{
    Navegacion
  }
};

</script>

<style scoped>

</style>



