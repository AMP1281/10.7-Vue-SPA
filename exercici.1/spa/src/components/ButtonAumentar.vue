<template>

        <div>

            <b-button @click="counter += 1"> {{counter}} </b-button>

        </div>
    
</template>

<script>


export default {

    data(){
        return{
            counter: 0
        }
    }

}

</script>
