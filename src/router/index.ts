import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Login from "@/views/LoginView.vue";
import Profile from "@/views/ProfileView.vue";
import Signup from "@/views/SignupView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/profile",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
