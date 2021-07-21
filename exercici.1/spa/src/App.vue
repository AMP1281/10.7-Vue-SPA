<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>

          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/clients">Clients</b-nav-item>
                <b-nav-item to="/proveidors">Proveidors</b-nav-item>
                <b-nav-item to="/magatzem">Magatzem</b-nav-item>
                <b-nav-item to="/botiga">Botiga</b-nav-item>
             </b-navbar-nav>

            </b-collapse>

      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>


