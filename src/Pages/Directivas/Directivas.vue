<script>

    import Header from '../../Components/Header/Header.vue';
    import vmodel from './Ejercicios/v-model.vue';
    import vfor from './Ejercicios/v-for.vue';
    import vbind from './Ejercicios/v-bind.vue';

    export default {
        name: 'Directivas',
        components: {
            Header,
            vmodel,
            vfor,
            vbind
        }
    }

</script>

<template>

    <Header/>

    <main>
        <h1>Directivas</h1>

        <div>
            <h3>"v-if"</h3>
            <p>Renderizar condicionalmente un elemento en el DOM ( solo si su valor es True )</p>

            <code>
                &lt;template&gt;<br>
                    -&lt;div&gt;<br>
                    --&lt;p v-if="mostrar"&gt;Este párrafo solo aparece si "mostrar" es true.&lt;/p&gt;<br>
                    --&lt;button @click="toggleMostrar"&gt;Alternar&lt;/button&gt;<br>
                    -&lt;/div&gt;<br>
                &lt;/template&gt;<br><br>

                &lt;script&gt;<br>
                    -export default {<br>
                        --data() {<br>
                            --return { mostrar: true }<br>
                        --},<br>
                        --methods: {<br>
                            ---toggleMostrar() {<br>
                            ----this.mostrar = !this.mostrar;<br>
                            ---}<br>
                        --}<br>
                    -}<br>
                &lt;/script&gt;<br>
            </code>
        </div>

        <div>
            <h3>"v-model"</h3>

            <vmodel/>
        </div>

        <div>
            <h3>"v-for"</h3>

            <vfor/>
        </div>

        <div>
            <h3>"v-bind"</h3>

            <vbind/>
        </div>
    </main>

</template>
