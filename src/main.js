import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router.js";
import radiusButton from "./components/UI/RadiusButton";
import itemCard from "./components/UI/ItemCard";

const app = createApp(App);

app.use(store);

app.use(router);

app.component("radius-button", radiusButton);
app.component("item-card", itemCard);

app.mount("#app");
