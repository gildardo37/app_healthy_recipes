<template>
  <div @click="goTo" class="row-action">
    <slot></slot>
    <div class="icon-wrapper">
      <img src="/assets/rounded-right-arrow.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    to: String,
  },
  setup(props) {
    const router = useRouter();

    const goTo = () => {
      router.push(props.to || "");
      setTimeout(()=> window.location.reload(), 200);
    }

    return { goTo };
  },
});
</script>

<style scoped>
.row-action {
  display: grid;
  grid-template-columns: 90% 10%;
  padding: 16px;
  gap: 16px;
  background: white;
  border-radius: 8px;
}
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
