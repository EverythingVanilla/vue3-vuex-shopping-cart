import axios from "axios";
import App from "./App.vue";
import { store } from "./store";
import { createApp } from "vue";
import toUSDCurrency from "./plugins/toUSDCurrency";

axios.defaults.baseURL = process.env.VUE_APP_API;

const app = createApp(App);

/**
 * Setup global filters
 */
app.use(toUSDCurrency);

/**
 * Setup store
 */
app.use(store);

/**
 * Mount the app
 */
app.mount("#vuejs-3-vuex-shopping-cart");
