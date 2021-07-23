<template>

    <div>
        
        <!--Pasamos de forma dinamica info al componente por url. Pinta el parametro que pasamos (id)-->
        <h1>Cliente desde componente: {{ $route.params.id }} </h1>

    </div>
    
</template>

<script>
export default {
    name:'ClienteComp'
}
</script>
