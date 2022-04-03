<template>
  <div class="meta-displayer">
    <img :src="`/assets/${imageName}.svg`" :alt="imageName" />
    <span>
      <strong>{{ value }}</strong> &nbsp; {{ prefix }}
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    imageName: String,
    value: String,
    prefix: String,
  },
});
</script>

<style scoped>
.meta-displayer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
}
</style>
