<template>
  <main>
    <v-nav title="Change Password" />
    <ion-list lines="full">
      <custom-input
        name="old_password"
        type="password"
        placeholder="Current Password"
      />
      <custom-input
        name="password"
        type="password"
        placeholder="New Password"
      />
      <custom-input
        name="confirm_password"
        type="password"
        placeholder="Confirm Password"
      />
    </ion-list>
    <div class="actions">
      <v-button type="border"> Cancel </v-button>
      <v-button type="solid"> Update Password </v-button>
    </div>
  </main>
</template>

<script lang="ts">
import { IonList } from "@ionic/vue";
import CustomInput from "@/components/CustomInput.vue";
import VNav from "@/components/Nav.vue";
import VButton from "@/components/Button.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "LoginView",
  components: { IonList, CustomInput, VNav, VButton },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
.actions {
  display: flex;
  gap: 15px;
  padding: 50px 16px;
  flex-direction: column;
}
</style>
