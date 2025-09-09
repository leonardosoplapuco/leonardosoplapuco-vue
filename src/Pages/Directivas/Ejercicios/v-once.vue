<script>

    export default {
        name: 'vonce',
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

    <p v-once>{{ contador }}</p>
    <p>{{ contador }}</p>
    <button type="button" @click="incrementar">aumentar</button>

</template>
