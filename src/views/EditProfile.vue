<template>
  <ion-page>
    <ion-content>
      <v-nav title="Edit Profile" />
      <ion-list lines="full">
        <custom-input name="name" type="text" placeholder="Full Name" />
        <custom-input name="email" type="text" placeholder="E-mail Address" />
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
      <div class="actions">
        <v-button type="border" @click="goBack()"> Cancel </v-button>
        <v-button type="solid"> Save </v-button>
      </div>
      <main-nav></main-nav>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonList } from "@ionic/vue";
import CustomSelect from "@/components/CustomSelect.vue";
import CustomInput from "@/components/CustomInput.vue";
import VNav from "@/components/Nav.vue";
import VButton from "@/components/Button.vue";
import { defineComponent } from "@vue/runtime-core";
import MainNav from "@/components/MainNav.vue";

export default defineComponent({
  name: "LoginView",
  components: { IonList, CustomInput, CustomSelect, VNav, VButton, MainNav },
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
    goBack() {
      this.$router.push("profile");
      setTimeout(() => window.location.reload(), 200);
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
.actions {
  display: flex;
  gap: 15px;
  padding: 50px 16px;
  flex-direction: column;
}
</style>
