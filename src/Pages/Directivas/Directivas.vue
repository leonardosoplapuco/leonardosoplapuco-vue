<script>

    import './Directivas.css';

    import Header from '../../Components/Header/Header.vue';
    import vmodel from './Ejercicios/v-model.vue';
    import vfor from './Ejercicios/v-for.vue';
    import vbind from './Ejercicios/v-bind.vue';
    import vbind2 from './Ejercicios/v-bind-2.vue';
    import vif from './Ejercicios/v-if.vue';
    import vfor2 from './Ejercicios/v-for-2.vue';
    import von from './Ejercicios/v-on.vue';
    import vshow from './Ejercicios/v-show.vue';
    import vtext from './Ejercicios/v-text.vue';
    import vhtml from './Ejercicios/v-html.vue';
    import vpre from './Ejercicios/v-pre.vue';
    import vcloak from './Ejercicios/v-cloak.vue';
    import vonce from './Ejercicios/v-once.vue';

    export default {
        name: 'Directivas',
        components: {
            Header,
            vmodel,
            vfor,
            vbind,
            vbind2,
            vif,
            vfor2,
            von,
            vshow,
            vtext,
            vhtml,
            vpre,
            vcloak,
            vonce
        }
    }

</script>

<template>

    <Header/>

    <main>
        <h1>Directivas</h1>

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

        <div>
            <h3>"v-bind-2"</h3>

            <vbind2/>
        </div>

        <div>
            <h3>"v-if"</h3>

            <vif/>
        </div>

        <div>
            <h3>"v-for-2"</h3>

            <vfor2/>
        </div>

        <div>
            <h3>"v-on"</h3>

            <von/>
        </div>

        <div>
            <h3>"v-show"</h3>

            <vshow/>
        </div>

        <div>
            <h3>"v-text"</h3>

            <vtext/>
        </div>

        <div>
            <h3>"v-html"</h3>

            <vhtml/>
        </div>

        <div>
            <h3>"v-pre"</h3>

            <vpre/>
        </div>

        <div>
            <h3>"v-cloak"</h3>

            <vcloak/>
        </div>

        <div>
            <h3>"v-once"</h3>

            <vonce/>
        </div>
    </main>

</template>
