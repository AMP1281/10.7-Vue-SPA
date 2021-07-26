<template>
  <div id="app">

      <TheNavigation/>

      <router-view/> <!--Carga las vistas (botiga, clients..) dinamicamente aqui-->

       <TheFooter/>

  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';
import TheFooter from '@/components/TheFooter';


export default{
  name:'App',
  components:{
    TheNavigation,
    TheFooter
  }
};

</script>

<style scoped>

</style>



