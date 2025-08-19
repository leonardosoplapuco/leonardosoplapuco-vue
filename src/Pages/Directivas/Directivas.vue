<script>

    import Header from '../../Components/Header/Header.vue';

    export default {
        name: 'Directivas',
        components: {
            Header
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
    </main>

</template>
