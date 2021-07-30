<template>

    <div>

        <b-navbar toggleable="lg" type="dark" variant="dark"> <!-- toggleable = responsive en md -->

            <b-navbar-brand href="#" class="col-md-3 d-flex justify-content-center align-items-center w-25">IT ACADEMY</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> <!--Es el Sandwich button-->

                    <b-collapse id="nav-collapse" is-nav> <!--Dentro del sandwich en md (id)-->

                        <b-navbar-nav class="col-md-6 fs-5 w-100 d-flex flex-row justify-content-center align-items-center">

                            <b-nav-item class="mx-2 px-2" to="/" exact>Home</b-nav-item> <!--b-nav-item actua como router-link(router link es como a)-->
                            <b-nav-item class="mx-2 px-2" to="/Users/:id">Users</b-nav-item>
                            <b-nav-item class="mx-2 px-2" to="/Pictures/:id">Pictures</b-nav-item>

                        </b-navbar-nav>

                    </b-collapse>

                    <b-navbar-nav class="ml-auto col-md-3 d-flex w-25 flex-row justify-content-center align-items-center">

                        <b-nav-form>

                            <b-input-group class="d-flex flex-row justify-content-center align-items-center">

                                <Autocomplete/>

                            </b-input-group>

                        </b-nav-form>

                    </b-navbar-nav>

        </b-navbar>

    </div>

</template>

<script>

import Autocomplete from './Autcomplete.vue'

export default {

    name: 'TheNavigation',

    components: {
      Autocomplete,
    },

}

</script>

<style scoped>



</style>