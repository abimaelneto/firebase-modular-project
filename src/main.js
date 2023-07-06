import "../firebase.config";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/modules/auth";
import "@/modules/toDoItems";

const app = createApp(App);

app.use(router);

app.mount("#app");
