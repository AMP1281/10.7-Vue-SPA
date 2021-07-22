<template>

    <b-navbar toggleable="md" type="light" variant="info"> <!-- toggleable = responsive en md -->

          <b-container> <!--centra-->

              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> <!--Es el Sandwich button-->

                <b-collapse id="nav-collapse" is-nav> <!--Dentro del sandwich en md (id)-->

                    <b-navbar-nav style="width: 100%" class="justify-content-center fs-5">

                        <b-nav-item class="mx-4" to="/" exact>Home</b-nav-item> <!--b-nav-item actua como router-link(router link es como a)-->
                        <b-nav-item class="mx-4" to="/clients/:id">Clients</b-nav-item>
                        <b-nav-item class="mx-4" to="/proveidors">Proveidors</b-nav-item>
                        <b-nav-item class="mx-4" to="/magatzem">Magatzem</b-nav-item>
                        <b-nav-item class="mx-4" to="/botiga">Botiga</b-nav-item>
                        
                    </b-navbar-nav>
                  
                </b-collapse>

          </b-container>

      </b-navbar>

</template>

<script>
export default {
    name: 'Navegacion'
};
</script>

<style scoped>
</style>