import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Login from "@/views/LoginView.vue";
import Profile from "@/views/ProfileView.vue";
import Signup from "@/views/SignupView.vue";
import EditProfile from "@/views/EditProfile.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import MyMeals from "@/views/MyMeals.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
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
  {
    path: "/editprofile",
    name: "editprofile",
    component: EditProfile,
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: ChangePassword,
  },
  {
    path: "/mymeals",
    name: "mymeals",
    component: MyMeals,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
