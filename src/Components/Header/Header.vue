<script>

    import './Header.css';

    import DarkButton from './Components/DarkButton/DarkButton.vue';

    export default{
        name: 'Header',
        components:{
            DarkButton
        }
    }

</script>

<template>
    <header>
        <div class="header">
            <a class="logo" href="" title="">
                <h2>leosoplapuco</h2>
            </a>

            <nav class="menu-container">
                <ul class="menu">
                    <li>
                        <router-link to="/">
                            <h2>Inicio</h2>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/servicios/">
                            <h2>Servicios</h2>
                        </router-link>
                    </li>
                </ul>
            </nav>

            <DarkButton/>
        </div>
    </header>
</template>
