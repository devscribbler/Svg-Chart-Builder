import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "@/assets/styles/global.css";
// import { useMainStore } from "./stores";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);
const pinia = createPinia(); // Create Pinia instance
// let store = null;
app.use(pinia); // Register Pinia with the Vue app
app.use(router);
app.use(vuetify);
app.mount("#app");

// Now use the store
// const store = useMainStore(); // Access store after Pinia is initialized
// store = useMainStore();
// console.log("store", store);
// store.loadPlan(
//   localStorage.getItem("frontrow2.editor.plan")
//     ? JSON.parse(localStorage.getItem("frontrow2.editor.plan"))
//     : sampleplan.sampleplan
// );
// Load the plan, ensuring to access localStorage only after the app is mounted
