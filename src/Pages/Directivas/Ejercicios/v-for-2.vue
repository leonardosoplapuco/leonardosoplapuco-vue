<script>

    export default {
        name: 'vfor2',
        data() {
            return {
                servicios:[
                    {
                        "id": 1,
                        "servicio": "Diseño Web",
                    },
                    {
                        "id": 2,
                        "servicio": "Desarrollo Frontend",
                    },
                    {
                        "id": 3,
                        "servicio": "SEO",
                    }
                ],
            };
        }
    }

</script>

<template>

    <ul style="display: flex">
        <li v-for="servicio in servicios" :key="servicio.id">
            <p>{{ servicio.servicio }}</p>
        </li>
    </ul>

</template>
