import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
