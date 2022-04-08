import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Login from "@/views/LoginView.vue";
import Profile from "@/views/ProfileView.vue";
import Signup from "@/views/SignupView.vue";
import EditProfile from "@/views/EditProfile.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import MyMeals from "@/views/MyMeals.vue";
import NewRecipes from "@/views/NewRecipes.vue";
import client from "@/client";

const validateLogin = async (to: any, from: any) => {
  const data = await client.validateToken();
  return data.message ? { path: "login" } : true;
};

const validateLoggedIn = async (to: any, from: any) => {
  const data = await client.validateToken();
  return data.message ? true : { path: "mymeals" };
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: [validateLoggedIn],
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    beforeEnter: [validateLogin],
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: [validateLogin],
  },
  {
    path: "/editprofile",
    name: "editprofile",
    component: EditProfile,
    beforeEnter: [validateLogin],
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: ChangePassword,
    beforeEnter: [validateLogin],
  },
  {
    path: "/mymeals",
    name: "mymeals",
    component: MyMeals,
    beforeEnter: [validateLogin],
  },
  {
    path: "/newrecipes",
    name: "newrecipes",
    component: NewRecipes,
    beforeEnter: [validateLogin],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
