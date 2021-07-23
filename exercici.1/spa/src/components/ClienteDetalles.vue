
<template>
    <div>
        <h1>Detalles</h1>

         <h1>Cliente desde componente: {{ $route.params.Pid }} </h1>

    </div>
</template>

<script>

export default {
    name:'ClienteDetalles',

  data(){
    return {
        cliId: this.$route.params.Pid,
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
}

</script>
