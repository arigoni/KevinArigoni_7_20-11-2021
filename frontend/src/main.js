// Fichier pivot qui fait le lien entre Vue et les modèles/composants.
// Utilisation framework Bootstrap pour le design
// Guide axios : https://axios-http.com/docs/intro
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "axios";

createApp(App)
    .use(router)
    .mount("#app");