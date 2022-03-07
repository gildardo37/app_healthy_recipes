<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="sign-image">
        <ion-title>{{ title }}</ion-title>
        <ion-img :src="src"></ion-img>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <slot></slot>
      <ion-button @click="onSubmit" class="log-button" expand="block">{{
        submitTitle
      }}</ion-button>
      <ion-item lines="none">
        <ion-label>
          <span>{{ footerLabel }}</span>
          <router-link :to="route.to">{{ route.label }}</router-link>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonButton,
  },
  props: {
    src: String,
    title: String,
    footerLabel: String,
    submitTitle: String,
    route: Object,
    onSubmit: Function,
  },
});
</script>

<style scoped>
.sign-image {
  height: 270px;
  box-shadow: none;
}
.sign-image ion-title {
  text-align: center;
  padding: 20px;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  color: #22242b;
}
ion-header::after {
  display: none;
}
ion-img {
  margin-top: 16px;
  height: 100%;
}
.log-button {
  margin: 24px 16px 0 16px;
  padding: 10;
}
.log-button button {
  border-radius: 50px !important;
}
ion-label {
  width: 100%;
  display: flex !important;
  justify-content: center;
  margin-top: 45px;
  font-size: 14px !important;
  font-family: Roboto;
  color: black;
}
a {
  font-family: Roboto;
  font-weight: 600;
  text-decoration: none;
  color: black !important;
  margin-left: 5px;
}
</style>
