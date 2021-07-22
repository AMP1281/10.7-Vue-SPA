<template>
  <div id="app">

      <Navegacion/>

      <router-view/> <!--Carga las vistas (botiga, clients..) dinamicamente aqui-->

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



