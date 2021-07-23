<template>
  <div id="app">

      <TheNavigation/>

      <router-view/> <!--Carga las vistas (botiga, clients..) dinamicamente aqui-->

  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';


export default{
  name:'App',
  components:{
    TheNavigation
  }
};

</script>

<style scoped>

</style>



