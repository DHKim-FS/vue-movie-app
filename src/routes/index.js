import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";
import Movie from "./Movie.vue";
import NotFound from "./NotFound.vue";

export default createRouter({
  // Hash, History
  // Hash Mode > https://google.com/#/search "/#/" 부분이 추가되어 새로고침 시 페이지를 찾을수 없는 현상을 방지
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  // pages
  // https://google.com/
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/movie/:id",
      component: Movie,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
