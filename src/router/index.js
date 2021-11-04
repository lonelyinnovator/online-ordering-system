import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const login = () => import("@/views/login/Login.vue");
<<<<<<< HEAD
const home = () => import("@/views/home/Home.vue");
const test = () => import("@/views/test/Test.vue");
=======
const user = () => import("@/views/home/User.vue");
const test = () => import("@/views/test/Test.vue");

const userHome = () => import("@/components/user/Home.vue");
>>>>>>> 72ffa5002af7545c737d05836b7ad3bb2a18a490


const routes = [

  {
    path: "/",
    redirect: "/login"
  },

  {
    path: "/login",
    name: "login",
    component: login
  },

  {
<<<<<<< HEAD
    path: "/home",
    name: "Home",
    component: home
=======
    path: "/user/",
    // redirect: "/user/home",
    name: "home",
    component: user,

    children: [
      {
        path: "home",
        name: "home",
        component: userHome,
      }
    ]
>>>>>>> 72ffa5002af7545c737d05836b7ad3bb2a18a490
  },

  {
    path: "/test",
    name: "Test",
    component: test
  }

];


const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
