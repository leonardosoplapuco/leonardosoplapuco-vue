<script>

    export default {
        name: 'vbind',
        data() {
            return {
                lista:[
                    {
                        "id": 1,
                        "nombre": "leosoplapuco",
                        "estado": true
                    },
                    {
                        "id": 2,
                        "nombre": "maria",
                        "estado": false
                    },
                    {
                        "id": 3,
                        "nombre": "angeles",
                        "estado": false
                    }
                ]
            };
        }
    }

</script>

<template>

    <ul>
        <li v-for="usuario in lista" :key="usuario.id" style="display: flex; gap: 10px">
            <div>{{ usuario.nombre }}</div>
            <p v-bind:class="usuario.estado ? 'online' : 'offline'">{{ usuario.estado ? 'online' : 'offline' }}</p>
        </li>
    </ul>

</template>

<style scoped>

.online {
  color: lightgreen;
  font-weight: bold;
}

.offline {
  color: gray;
  font-style: italic;
}

</style>
