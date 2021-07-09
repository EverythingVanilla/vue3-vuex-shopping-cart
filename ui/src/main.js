import axios from "axios";
import App from "./App.vue";
import { createApp } from "vue";

axios.defaults.baseURL = process.env.VUE_APP_API;

createApp(App).mount("#vuejs-3-vuex-shopping-cart");
