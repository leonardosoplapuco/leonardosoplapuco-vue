<script>

    export default {
        name: 'vtext',
        data() {
            return {
                mensaje: "Hola desde v-text"
            }
        }
    }

</script>

<template>

    <p v-text="mensaje"/>
    <p>{{ mensaje }}</p>

</template>
