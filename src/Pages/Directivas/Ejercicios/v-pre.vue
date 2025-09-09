<script>

    export default {
        name: 'vpre',
        data() {
            return {
                mensaje: "Hola desde Vue"
            }
        }
    }

</script>

<template>

    <p v-pre>{{ mensaje }}</p>
    <p>{{ mensaje }}</p>

</template>
