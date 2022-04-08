<template>
  <default-sign-layout
    :onSubmit="signup"
    :route="route"
    footerLabel="Already have an account?"
    submitTitle="Register"
    title="Sign up"
    src="/assets/singup-background.svg"
  >
    <ion-list lines="full">
      <custom-input
        :onChange="onInputChange"
        name="name"
        type="text"
        placeholder="Full Name"
      />
      <custom-input
        :onChange="onInputChange"
        name="email"
        type="text"
        placeholder="E-mail Address"
      />
      <custom-input
        :onChange="onInputChange"
        name="password"
        type="password"
        placeholder="Password"
      />
      <custom-select :onChange="onInputChange" name="gender" title="Gender">
        <template>
          <ion-select-option value="Female">Female</ion-select-option>
          <ion-select-option value="Male">Male</ion-select-option>
        </template>
      </custom-select>
      <div class="meta-wrappers">
        <custom-input
          :onChange="onInputChange"
          name="date_of_birth"
          type="date"
          placeholder="Date Birth"
        />
        <custom-input
          :onChange="onInputChange"
          name="height"
          type="number"
          placeholder="Height (cm)"
        />
        <custom-input
          :onChange="onInputChange"
          name="weight"
          type="number"
          placeholder="Weight (kg)"
        />
      </div>
    </ion-list>
  </default-sign-layout>
</template>

<script lang="ts">
import { ref } from "vue";
import { IonList } from "@ionic/vue";
import DefaultSignLayout from "./DefaultSignLayout.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import CustomInput from "@/components/CustomInput.vue";
import { defineComponent } from "@vue/runtime-core";
import client from "@/client";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginView",
  components: { DefaultSignLayout, IonList, CustomInput, CustomSelect },
  data() {
    return {
      route: {
        to: "/login",
        label: "Log in",
      },
    };
  },
  setup() {
    const data = ref<{ [key: string]: string }>();
    const router = useRouter();

    const onInputChange = (event: any) => {
      if (!event.target.name || !event.target.value) return;

      data.value = {
        ...data.value,
        [event.target.name]: event.target.value,
      };
      console.log(data.value);
    };

    const signup = async () => {
      try {
        if (!data.value) return;
        const body = JSON.stringify(data.value);
        const signup_response: any = await client.signup(body);

        if (!signup_response.token) {
          throw new Error("User or email invalid");
        }

        client.saveToken(signup_response.token);
        router.push({ name: "mymeals" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      onInputChange,
      signup,
    };
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
