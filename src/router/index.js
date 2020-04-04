import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ReadMe from "../views/ReadMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/readme/:username/:repoName",
    name: "Readme",
    component: ReadMe,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
