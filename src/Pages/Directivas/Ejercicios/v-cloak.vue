<script>

    export default {
        name: 'vcloak',
        data() {
            return {
                mensaje: ""
            }
        },
        mounted() {
            setTimeout(() => {
                this.mensaje = "App lista 🚀"
            }, 1500);
        }
    }

</script>

<template>

    <p v-cloak>{{ mensaje }}</p>

</template>

<style scoped>

    [v-cloak]{
        display: none;
    }

</style>
