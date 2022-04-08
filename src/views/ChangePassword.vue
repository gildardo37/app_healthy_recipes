<template>
  <ion-page>
    <ion-content>
      <v-nav :showGoBack="true" title="Change Password" />
      <ion-list lines="full">
        <custom-input
          name="old_password"
          type="password"
          :onChange="onPassChange"
          placeholder="Current Password"
        />
        <custom-input
          name="password"
          type="password"
          :onChange="onNewChange"
          placeholder="New Password"
        />
      </ion-list>
      <span v-if="missingFields">Complete all the fields</span>
      <div class="actions">
        <v-button type="border" @click="goBack()"> Cancel </v-button>
        <v-button type="solid" @click="updatePass()"> Update Password </v-button>
      </div>
      <h4 v-if="showMessage">{{ message }}</h4>
      <h4 v-if="showError">{{ errorMessage }}</h4>
      <main-nav></main-nav>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonList } from "@ionic/vue";
import CustomInput from "@/components/CustomInput.vue";
import VNav from "@/components/Nav.vue";
import VButton from "@/components/Button.vue";
import { defineComponent } from "@vue/runtime-core";
import client from "@/client";
import MainNav from "@/components/MainNav.vue";

export default defineComponent({
  name: "LoginView",
  components: { IonList, CustomInput, VNav, VButton, MainNav},
  data() {
    return {
      pass: "",
      newPass: "",
      confirmPass: "",
      message: "",
      errorMessage: "",
      showMessage: false,
      showErrorMessage: false,
      missingFields: false,
    };
  },
  methods: {
    onPassChange(event: any) {
      this.pass = event.target.value;
    },
    onNewChange(event: any) {
      this.newPass = event.target.value;
    },
    async updatePass() {
      try {
        if(this.pass != "" && this.newPass != ""){
          const response: any = await client.changePassword(
            this.pass,
            this.newPass
          );
          console.log(response);
          if(response.status == 0 ){
            this.message = response.message;
            this.showMessage = true;
            this.$router.push({ name:"profile" });
            setTimeout(()=>window.location.reload(), 3000)
          }
          else{
            this.errorMessage = response.message;
            this.showErrorMessage = true;
            
            setTimeout(()=>{
              this.errorMessage = "";
              this.showErrorMessage = false;
            }, 5000)
          }
        }
        else {
          this.missingFields = true;
          setTimeout(() => this.missingFields = false, 10000);
          console.log("all fields!!!")
        }
      } catch (error) {
        console.log(error);
      }
    },
    goBack(){
      this.$router.push("profile");
      setTimeout(()=> window.location.reload(), 200);
    }
  },
});
</script>

<style scoped>
.actions {
  display: flex;
  gap: 15px;
  padding: 30px 16px;
  flex-direction: column;
}

span{
  padding: 0 16px;
  color: red;
  opacity: 0.8;
  font-size: 14px;
}

h4{
  color: rgb(50, 182, 50);
  text-align: center;
  font-size: 18px;
}
</style>
