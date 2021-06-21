import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Users from "./views/Users.vue";
import Login from "./views/Login.vue";



const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
