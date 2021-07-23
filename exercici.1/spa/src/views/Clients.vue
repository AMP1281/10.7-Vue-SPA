<template>

  <div>

    <b-container>

    <h1>Clients</h1>

          <ul class="row list-unstyled">

              <li class="col-md-4 mt-4 d-flex align-items-stretch justify-content-center" 
              v-for="(item, index) in clientesArreglo" :key="index">

                  <div class="card text-center w-100">
                    <h5 class="card-header py-4">
                      {{item.nomClient}}</h5>

                    <div class="card-body py-5">

                      <p class="card-text"><b-button @click="mostrarDetall()">Detalls</b-button></p>

                    </div>

                  </div>

              </li>

          </ul>
        
    <ClienteComp/>

    </b-container>

  </div>

</template>

<script>

import ClienteComp from '@/components/ClienteComp.vue'

export default {
  name:'Clients',
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
  components: {
    ClienteComp
  },
  methods:{
    mostrarDetall(){
      this.$router.push(name:'details')
    },
    home(){
      this.$router.push('/')
    },
    anterior(){
      this.$router.go(-1)
    },
    siguiente(){
      this.$router.go(1)
    }
  },
}
</script>