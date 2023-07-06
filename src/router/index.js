import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Test from "../views/Test.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
  ],
});

export default router;
