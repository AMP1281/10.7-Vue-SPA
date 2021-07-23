<template>
    <div>

        <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="(item, index) in clientesArreglo" :key="index">

                  <div class="card text-center w-100">
                    <h5 class="card-header py-4">
                      {{item.nomClient}}</h5>

                    <div class="card-body py-5">

                      <p class="card-text"><b-button @click="mostrarDetall(data.idClient)">Detalls</b-button></p>

                    </div>

                  </div>

              </li>

          </ul>
        
        <!--Pasamos de forma dinamica info al componente por url. Pinta el parametro que pasamos (id)-->
        <h1>Cliente desde componente: {{ $route.params.id }} </h1>

    </div>
</template>

<script>


export default {
    name:'ClienteComp',

    data(){
    return {
      clientesArreglo: [
      {
        nomClient:"Carme",
        mailClient:"carme@email.com",
        telClient: 658111111,
        idClient: 1
      },
      {
        nomClient:"Rosa",
        mailClient:"rosa@email.com",
        telClient: 658222222,
        idClient: 2
      },
      {
        nomClient:"Anna",
        mailClient:"anna@email.com",
        telClient: 658333333,
        idClient: 3
      }
      ]
    }
  },
  methods:{
    mostrarDetall(){
        this.$router.push({name:'ClienteDetalles'})
    },
  }
}

</script>
