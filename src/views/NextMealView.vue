<template>
  <ion-page>
    <ion-content :fullscreen="true"> 
        <v-nav :showGoBack="true"  title="My Next Meal"/>
        <section v-if="meal">
            <img src="" alt="" srcset="">
            <h3>{{meal.title}}</h3>
        </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import client from "@/client";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import VNav from "@/components/Nav.vue";

export default defineComponent({
  components: {
    VNav,
  },
  setup() {
    const meal = ref();
    const route = useRoute();
    const getMeal = async () => {
      try {
        const id = route.params.id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const { data } = await client.getMealById(id);
        meal.value = data.meal;
      } catch (error) {
        console.error(error);
      }
    };

    getMeal();

    return {
      meal,
    };
  },
});
</script>

<style scoped>

section{
    padding:  0 10px;
}
</style>