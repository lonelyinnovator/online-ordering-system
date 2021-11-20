import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookies from "vue-cookies"

const app = createApp(App);

app.use(store);

app.use(router);

app.mount("#app");

app.config.globalProperties.$cookies = cookies;


