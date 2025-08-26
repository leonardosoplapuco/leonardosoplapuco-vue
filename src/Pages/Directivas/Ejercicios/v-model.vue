<script>

    export default {
        name: 'vmodel',
        data() {
            return {
                mensaje: '',
            };
        }
    }

</script>

<template>
    
    <input type="text" placeholder="Escribe aqui" v-model="mensaje"></input>
    <p>{{ mensaje }}</p>

</template>
