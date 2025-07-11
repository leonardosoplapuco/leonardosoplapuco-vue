<template>
    <h1 class="h1">{{ h1 }}</h1>
</template>

<script>

    export default{
        name: 'Header',
        data(){
            return{
                h1: 'Aprendiendo Vue.js'
            }
        }
    }

</script>

<style lang="css" scoped>

    .h1{
        font-size: 100px;
        color: red;
    }

</style>
