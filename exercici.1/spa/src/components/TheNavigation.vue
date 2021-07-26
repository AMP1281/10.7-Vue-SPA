<template>

    <div>

        <b-navbar toggleable="lg" type="dark" variant="dark"> <!-- toggleable = responsive en md -->

            <b-navbar-brand href="#" class="col-sm-3">IT Academy</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> <!--Es el Sandwich button-->

                    <b-collapse id="nav-collapse" is-nav> <!--Dentro del sandwich en md (id)-->

                        <b-navbar-nav class="col-sm-6 fs-5 w-100 d-flex flex-row justify-content-center align-items-center">

                            <b-nav-item class="mx-2 px-2" to="/" exact>Home</b-nav-item> <!--b-nav-item actua como router-link(router link es como a)-->
                            <b-nav-item class="mx-2 px-2" to="/Clients/:id">Clients</b-nav-item>
                            <b-nav-item class="mx-2 px-2" to="/proveidors">Proveidors</b-nav-item>
                            <b-nav-item class="mx-2 px-2" to="/magatzem">Magatzem</b-nav-item>
                            <b-nav-item class="mx-2 px-2" to="/botiga">Botiga</b-nav-item>
                            
                        </b-navbar-nav>

                    </b-collapse>

                    <b-navbar-nav class="ml-auto col-sm-3">

                        <b-nav-form>

                            <b-input-group>
                                <b-form-input type="search" size="sm"></b-form-input>
                                <b-form-append>
                                    <div class="input-group-text" size="sm"><i class="fas fa-search"></i></div>
                                </b-form-append>
                            </b-input-group>

                        </b-nav-form>

                    </b-navbar-nav>

        </b-navbar>

    </div>

</template>

<script>
export default {
    name: 'Navegacion'
};
</script>

<style scoped>

.b-form-input{
    border-right: none !important;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
.input-group-text{
    border-left: none !important;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

</style>