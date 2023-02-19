import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

/* ROTAS */
import HomePage from '@/views/HomePage.vue'
import UpdatePage from '@/views/UpdatePage'

/* CSS */
import './assets/style/main.css'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'HomePage', component: HomePage},
        {path: '/updates', name:'UpdatePage', component:UpdatePage}
    ]
})

createApp(App)
.use(router)
.mount('#app')
