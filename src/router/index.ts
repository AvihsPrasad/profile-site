import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
//import SiteMain from "../components/SiteMain.vue";
import Projects from "../components/Projects.vue";
import About from "../components/About.vue";
import TestimonialPage from "../components/TestimonialPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/testimonials",
    name: "TestimonialPage",
    component: TestimonialPage
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
