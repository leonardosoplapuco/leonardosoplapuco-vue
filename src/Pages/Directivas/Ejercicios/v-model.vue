<script>

    export default {
        name: 'vmodel',
        data() {
            return {
                mensaje: '',
                transform: false
            };
        }
    }

</script>

<template>
    
    <input type="text" placeholder="Escribe aqui" v-model="mensaje"></input>
    <input type="checkbox" v-model="transform"></input>
    <p v-bind:class="{ 'text-transform': transform }">{{ mensaje }}</p>

</template>

<style scoped>

    .text-transform {
        text-transform: uppercase;
        font-weight: bold;
    }

</style>
