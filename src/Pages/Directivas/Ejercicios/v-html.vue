<script>

    export default {
        name: 'vhtml',
        data() {
            return {
                mensajeHTML: "<strong>Hola</strong> desde <em>v-html</em>"
            }
        }
    }

</script>

<template>

    <p v-html="mensajeHTML"></p>
    <p>{{ mensajeHTML }}</p>

</template>
