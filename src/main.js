import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./scss/custom.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap";

createApp(App).use(router).mount("#app");
