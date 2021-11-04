import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const login = () => import("@/views/login/Login.vue");
const user = () => import("@/views/home/User.vue");
const test = () => import("@/views/test/Test.vue");

const userHome = () => import("@/components/user/Home.vue");


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
