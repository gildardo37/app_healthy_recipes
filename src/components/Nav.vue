<template>
  <header class="nav">
    <div v-if="showGoBack" @click="goBack">
      <img src="/assets/arrow-left.svg" alt="go-back" />
    </div>
    <div v-else>&nbsp;</div>
    <h2>{{ title }}</h2>
    <div><slot name="icon"></slot></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VNav",
  props: {
    title: String,
    showGoBack: Boolean,
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
      setTimeout(() => window.location.reload(), 200);
    };

    return {
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
  text-align: center;
}
</style>
