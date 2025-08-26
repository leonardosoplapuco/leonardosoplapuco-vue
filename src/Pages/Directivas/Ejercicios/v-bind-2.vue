<script>

    export default {
        name: 'vbind2',
        data(){
            return{
                src : "https://kamas.pe/assets/imagenes/paginas/pagina-principal/slider/slider-2.webp",
                href : "https://kamas.pe/assets/imagenes/paginas/pagina-principal/slider/slider-2.webp"
            }
        }
    }

</script>

<template>
    <img v-bind:src="src"/>
    <a :href="href">ir a la foto</a>
</template>
