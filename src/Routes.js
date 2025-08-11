import { createRouter, createWebHistory } from 'vue-router'

import Services from './Pages/Services/Services.vue'
import Homepage from './Pages/Homepage.vue'
import NoPage from './Pages/NoPage.vue'

const routes = [
    { path: '/', component: Homepage },
    { path: '/servicios/', component: Services },
    { path: '/:pathMatch(.*)*', name: 'NoPage', component: NoPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
