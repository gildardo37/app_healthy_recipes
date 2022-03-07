<template>
  <ion-item>
    <ion-label position="stacked">{{ placeholder }}</ion-label>
    <ion-input :type="type" @input="onChange"></ion-input>
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
  },
});
</script>
<style scoped>
ion-item {
  margin: 7px 0;
}
ion-label {
  font-size: 12px;
  font-family: Roboto;
  color: #92949c;
}
</style>
