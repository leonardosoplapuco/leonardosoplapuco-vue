<script>

    export default {
        name: 'von',
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            incrementar(){
                this.contador++
            }
        }
    }

</script>

<template>

    <p>{{ contador }}</p>
    <button type="button" @click="incrementar">aumentar</button>

</template>
