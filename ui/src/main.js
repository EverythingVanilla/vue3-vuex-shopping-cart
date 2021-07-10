import axios from "axios";
import App from "./App.vue";
import { createApp } from "vue";
import toUSDCurrency from "./plugins/toUSDCurrency";

axios.defaults.baseURL = process.env.VUE_APP_API;

const app = createApp(App);

app.use(toUSDCurrency);
app.mount("#vuejs-3-vuex-shopping-cart");
