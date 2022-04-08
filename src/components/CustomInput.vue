<template>
  <ion-item lines="none">
    <ion-label position="stacked">{{ placeholder }}</ion-label>
    <ion-input :name="name" :type="type" @input="onChange"></ion-input>
  </ion-item>
</template>

<script lang="ts">
import { IonInput, IonLabel, IonItem } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomInput",
  components: { IonInput, IonLabel, IonItem },
  props: {
    placeholder: String,
    type: String,
    onChange: Function,
    name: String,
  },
});
</script>
<style scoped>
ion-item {
  margin: 7px 0;
}
ion-label {
  font-size: 12px;
  font-family: Manrope;
  color: red;
}
ion-input {
  margin-top: 10px;
  background: #f2f2f2;
  border-radius: 8px;
  padding-left: 10px !important;
}
</style>
