/*
 * @Author: BitCreate
 * @Date: 2024-04-01 21:58:14
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "uno.css";
import "@unocss/reset/tailwind.css";
import "./assets/css/global.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
