import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
});

const init = async () => {
    try {
        await store.dispatch("users/fetchUsers");

        app.use(router);
        app.use(store);
        app.use(vuetify);

        app.mount("#app");

    } catch (error) {
        console.error(error);
    }
};

init();