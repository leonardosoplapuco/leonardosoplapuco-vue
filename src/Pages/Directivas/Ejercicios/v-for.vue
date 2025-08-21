<!-- <script>

    export default {
        name: 'vfor',
        data() {
            return {
                nuevaTarea: '',
                lista: []
            };
        }
    }

</script>

<template>

    <div>
        <input type="text" v-model="nuevaTarea" placeholder="agregar tarea"></input>
        <button type="button">agregar</button>
    </div>


    <div>
        <ul>
            <li>
                <p>{{ nuevaTarea }}</p>
                <button type="button">eliminar</button>
            </li>
        </ul>
    </div>

</template> -->

<script>
export default {
  name: 'vfor',
  data() {
    return {
      nuevaTarea: '',
      lista: [] // Array vacío de tareas
    };
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim() !== '') {
        this.lista.push({
          id: Date.now(), // un id único
          texto: this.nuevaTarea
        });
        this.nuevaTarea = ''; // limpiar input
      }
    },
    eliminarTarea(id) {
      this.lista = this.lista.filter(tarea => tarea.id !== id);
    }
  }
};
</script>

<template>
  <div>
    <input
      type="text"
      v-model="nuevaTarea"
      placeholder="agregar tarea"
    />
    <button type="button" @click="agregarTarea">Agregar</button>
  </div>

  <div>
    <ul>
      <li v-for="tarea in lista" :key="tarea.id">
        <p>{{ tarea.texto }}</p>
        <button type="button" @click="eliminarTarea(tarea.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

