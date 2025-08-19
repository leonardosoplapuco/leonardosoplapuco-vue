import { createRouter, createWebHistory } from 'vue-router'

import Directivas from './Pages/Directivas/Directivas.vue'
import Homepage from './Pages/Homepage.vue'
import NoPage from './Pages/NoPage.vue'

const routes = [
    { path: '/', component: Homepage },
    { path: '/directivas/', component: Directivas },
    { path: '/:pathMatch(.*)*', name: 'NoPage', component: NoPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
