import Vue from "vue";
import VueRouter from "vue-router";
import about1 from "../views/about1.vue";
import about2 from "../views/about2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "about",
    component: about1
  },
  {
    path: "/about1",
    name: "",
    component: about1
  },
  {
    path: "/about2",
    name: "",
    component: about2
  }
];

const router = new VueRouter({
  routes
});

export default router;
