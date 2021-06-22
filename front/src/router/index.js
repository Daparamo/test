import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue';
import Todos from '../views/Todos.vue';
import Editar from '../views/Editar.vue';
import Nuevo from '../views/Nuevo.vue';


Vue.use(VueRouter)

const routes = [{
        path: '/',
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router