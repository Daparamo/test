import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue';
import Todos from '../views/Todos.vue';
import Editar from '../views/Editar.vue';
import Nuevo from '../views/Nuevo.vue';
import Login from '../views/Login.vue';


Vue.use(VueRouter)

const routes = [{
        path: '/dashboard',
        name: 'Home',
        component: Dashboard
    },
    {
        path: '/editar/:id',
        name: 'Editar',
        component: Editar
    },
    {
        path: '/nuevo',
        name: 'Nuevo',
        component: Nuevo
    },
    {
        path: '/todos/:id',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/',
        name: 'Login',
        component: Login

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router