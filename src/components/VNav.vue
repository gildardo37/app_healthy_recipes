<template>
  <header class="nav">
    <div v-show="showGoBack" @click="goBack">
      <img src="/assets/arrow-left.svg" alt="go-back" />
    </div>
    <h2>{{ title }}</h2>
    <div><slot name="icon"></slot></div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "VNav",
  props: {
    title: String,
  },
  setup() {
    const showGoBack = computed<boolean>(() => {
      const { path } = useRoute();
      return path !== "/";
    });

    const router = useRouter();
    const goBack = () => router.back();

    return {
      showGoBack,
      goBack,
    };
  },
});
</script>

<style scoped>
.nav {
  display: grid;
  padding: 24px 18px;
  grid-template-columns: repeat(3, 1fr);
}

h2 {
  margin: 0;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
