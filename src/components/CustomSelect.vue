<template>
  <ion-item lines="none">
    <ion-label position="stacked">{{ title }}</ion-label>
    <ion-select @ionChange="onChange" :name="name" :placeholder="placeholder">
      <slot></slot>
    </ion-select>
  </ion-item>
</template>

<script lang="ts">
import { IonLabel, IonItem, IonSelect } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomSelect",
  components: { IonLabel, IonItem, IonSelect },
  props: {
    placeholder: String,
    title: String,
    name: String,
    onChange: Function,
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
ion-select {
  margin-top: 10px;
  background: #f2f2f2;
  border-radius: 8px;
  padding-left: 10px !important;
}
</style>

