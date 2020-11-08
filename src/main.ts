import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.scss";

const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

app.use(store).use(router).mount("#app");

// createApp(App)
//   .use(store)
//   .use(router)
//   .mount("#app");
