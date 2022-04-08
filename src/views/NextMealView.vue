<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <v-nav :showGoBack="true" title="My Next Meal" />
      <section v-if="meal">
        <a target="_blank" :href="meal.image">
          <img
            src="https://grillsfusionparrilla.com/wp-content/uploads/2020/10/platillos2-1024x1024.png"
            alt=""
            srcset=""
        /></a>
        <h4>{{ meal.title }}</h4>
        <span class="type">{{ meal.type }}</span>

        <div class="button-wrapper">
          <v-button type="solid" @click="concludeMeal">
            Conclude my meal</v-button
          >
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import client from "@/client";
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import VNav from "@/components/Nav.vue";
import VButton from "@/components/Button.vue";

export default defineComponent({
  components: {
    VNav,
    VButton,
  },
  setup() {
    const meal = ref();
    const route = useRoute();
    const router = useRouter();

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

    const concludeMeal = async () => {
      try {
        const id = route.params.id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const response = await client.concludeMeal(id);
        if (response.status == 0) {
          router.push({ name: "home" });
          setTimeout(() => window.location.reload(), 200);
        }
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getMeal();

    return {
      meal,
      concludeMeal,
    };
  },
});
</script>

<style scoped>
section {
  padding: 0 10px;
}
section img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.button-wrapper {
  margin-top: 50px;
}
</style>