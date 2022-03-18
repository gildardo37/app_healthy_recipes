<template>
  <default-sign-layout
    :onSubmit="login"
    :route="route"
    footerLabel="Already have an account?"
    submitTitle="Register"
    title="Sign up"
    src="/assets/singup-background.svg"
  >
    <ion-list lines="full">
      <custom-input name="name" type="text" placeholder="Full Name" />
      <custom-input name="email" type="text" placeholder="E-mail Address" />
      <custom-input name="password" type="password" placeholder="Password" />
      <custom-select title="Genre">
        <template>
          <ion-select-option value="f">Female</ion-select-option>
          <ion-select-option value="m">Male</ion-select-option>
        </template>
      </custom-select>
      <div class="meta-wrappers">
        <custom-input name="age" type="number" placeholder="Age" />
        <custom-input name="height" type="number" placeholder="Height (cm)" />
        <custom-input name="weight" type="number" placeholder="Weight (kg)" />
      </div>
    </ion-list>
  </default-sign-layout>
</template>

<script lang="ts">
import { IonList } from "@ionic/vue";
import DefaultSignLayout from "./DefaultSignLayout.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import CustomInput from "@/components/CustomInput.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "LoginView",
  components: { DefaultSignLayout, IonList, CustomInput, CustomSelect },
  data() {
    return {
      username: "",
      password: "",
      route: {
        to: "/login",
        label: "Log in",
      },
    };
  },
  methods: {
    onUsernameChange(event: any) {
      this.username = event.target.value;
    },
    onPasswordChange(event: any) {
      this.password = event.target.value;
    },
    login() {
      console.log("Login");
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}
.input-wrapper {
  flex-direction: column !important;
}
#container a {
  text-decoration: none;
}
.meta-wrappers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
