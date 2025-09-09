<script>

    export default {
        name: 'vshow',
        data() {
            return {
                mostrar: true,
                mensaje: "Soy visible si mostrar es true"
            }
        },
        methods: {
            cambiar(){
                this.mostrar = !this.mostrar
            }
        }
    }

</script>

<template>

    <p v-show="mostrar">{{ mensaje }}</p>
    <button type="button" @click="cambiar">cambiar estado</button>

</template>
