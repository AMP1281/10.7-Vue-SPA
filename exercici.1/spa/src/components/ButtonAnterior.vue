<template>

    <div>

        <b-button class="mt-4" @click="anterior()"> Enrere </b-button>

    </div>

</template>

<script>

export default {

    name:'ButtonAnterior',

    methods:{
        anterior(){
        this.$router.go(-1)
        },
    }

}

</script>
