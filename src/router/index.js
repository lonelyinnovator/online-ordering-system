import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const login = () => import("@/views/login/Login.vue");
const user = () => import("@/views/home/User.vue");
const test = () => import("@/views/test/Test.vue");

const userHome = () => import("@/components/user/Home.vue");
const userShoppingCart = () => import("@/components/user/ShoppingCart.vue");
const userOrderings = () => import("@/components/user/Orderings.vue");
const userSettings = () => import("@/components/user/Settings.vue");


const routes = [

  {
    path: "/",
    redirect: "/user/home"
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
      },
      {
        path: "shoppingcart",
        name: "shoppingcart",
        component: userShoppingCart,
      },
      {
        path: "orderings",
        name: "orderings",
        component: userOrderings,
      },
      {
        path: "settings",
        name: "settings",
        component: userSettings,
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
