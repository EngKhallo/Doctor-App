import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import Login from './pages/login.vue';
import Doctors from './pages/Doctors.vue';
import Home from './pages/Home.vue';
import './style.css';

const router = createRouter({
    routes:[ // means links, destinations
        { path: '/', component: Home},
        { path: '/login', component: Login },
        { path: '/doctors', component: Doctors}
    ],
    history: createWebHistory()
    
});
const app = createApp(App)
app.use(router);
app.mount('#app');