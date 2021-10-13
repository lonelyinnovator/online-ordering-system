import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const login = () => import("@/views/login/Login.vue");
const home = () => import("@/views/home/Home.vue");


const routes = [

  {
    path: "/",
    redirect: "/login"
  },

  {
    path: "/login",
    name: "Login",
    component: login
  },

  {
    path: "/home",
    name: "Home",
    component: home
  }

]


const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
})

export default router
