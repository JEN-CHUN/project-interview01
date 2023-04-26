import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "./components/pages/IndexPage.vue";
import InputPage from "./components/pages/InputPage.vue";
import SponsorPage from "./components/pages/SponsorPage.vue";

const titleMain = "快速小作業";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      meta: {
        title: `${titleMain}-首頁`,
      },
      component: IndexPage,
    },
    {
      path: "/input",
      meta: {
        title: `${titleMain}-輸入V-Model`,
      },
      component: InputPage,
    },
    {
      path: "/sponsor",
      meta: {
        title: `${titleMain}-API串接`,
      },
      component: SponsorPage,
    },
    { path: "/:notfound(.*)", redirect: "/" },
  ],
});

// 透過每次切換頁面，會自動根據meta中的title更改document title
router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

export default router;
