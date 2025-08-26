<script>

    export default {
        name: 'vif',
        data() {
            return {
                logeado: true
            };
        }
    }

</script>

<template>

    <div v-if="logeado">
        <p>"Bienvenido de nuevo"</p>
    </div>
    <div v-else>
        <p>"Por favor inicia sesión"</p>
    </div>

</template>