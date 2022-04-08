<template>
  <default-sign-layout
    :onSubmit="login"
    :route="route"
    footerLabel="Don't have an account?"
    submitTitle="LOGIN"
    title="Login"
    src="/assets/login-background.svg"
  >
    <ion-list lines="full">
      <custom-input
        type="text"
        :onChange="onEmailChange"
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
import client from "@/client";

export default defineComponent({
  name: "LoginView",
  components: { DefaultSignLayout, IonList, CustomInput },
  data() {
    return {
      email: "",
      password: "",
      route: {
        to: "/signup",
        label: "Sign up",
      },
    };
  },
  methods: {
    onEmailChange(event: any) {
      this.email = event.target.value;
    },
    onPasswordChange(event: any) {
      this.password = event.target.value;
    },
    async login() {
      try {
        const login_response: any = await client.login(
          this.email,
          this.password
        );

        if (!login_response.token) {
          throw new Error("User or email invalid");
        }

        client.saveToken(login_response.token);
        this.$router.push({ name:"home" });
        setTimeout(()=>window.location.reload(),200)
        console.log("upto here");
      } catch (error) {
        console.log(error);
      }
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
