import { createApp } from 'vue';
import router from './Routes.js';

import App from './App.vue';

import './App.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
