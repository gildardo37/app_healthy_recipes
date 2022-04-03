<template>
  <button :class="`c-button ${type}`"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VButton",
  props: {
    type: String,
  },
});
</script>

<style scoped>
.c-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 100%;
  border-radius: 50px;
}
.solid {
  color: white;
  background: #fe6a32;
}
.border {
  border: 1px solid #fe6a32;
  background: white;
  color: #fe6a32;
}
</style>
