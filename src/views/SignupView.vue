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
      <custom-input
        type="text"
        :onChange="onUsernameChange"
        placeholder="E-mail Addres"
      />
      <custom-input
        type="password"
        :onChange="onPasswordChange"
        placeholder="Password"
      />
    </ion-list>
  </default-sign-layout>
</template>

<script lang="ts">
import { IonList } from "@ionic/vue";
import DefaultSignLayout from "./DefaultSignLayout.vue";
import CustomInput from "@/components/CustomInput.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "LoginView",
  components: { DefaultSignLayout, IonList, CustomInput },
  data() {
    return {
      username: "",
      password: "",
      route: {
        to: "/signup",
        label: "Sign up",
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
</style>
