<template>
  <ion-page>
    <ion-content>
      <header>
        <h5>
          Welcome, <strong>{{ name }}!</strong>
        </h5>
        <img
          class="profile_picture"
          src="https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo"
          alt="profile picture"
        />
      </header>
      <div class="bg-orange">
        <div class="main">
          <section>
            <div class="card">
              <div class="card-header">
                <img
                  class="food_image"
                  src="https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="card-content">
                <div class="row">
                  <span>Avocado explosive salad</span>
                  <span><strong>13 min</strong> prep</span>
                </div>
                <div class="breakfast">Breakfast</div>
                <v-button @click="handlePreparedMeal" type="border"
                  >Prepare your next meal</v-button
                >
              </div>
            </div>
          </section>
          <section>
            <h3>Diets you might be into</h3>
            <div class="diets">
              <div class="mini-card">
                <img src="/assets/diet.png" alt="my images" />
                <strong><span>The vegan Diet</span></strong>
                <span>Healthy</span>
              </div>
              <div class="mini-card">
                <img src="/assets/energetic.png" alt="my images" />
                <strong><span>Low-Carb Diet</span></strong>
                <span>Energetic</span>
              </div>
              <div class="mini-card">
                <img src="/assets/classic.png" alt="my images" />
                <strong><span>Mediterraneo</span></strong>
                <span>Classic</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <main-nav></main-nav>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import VButton from "@/components/Button.vue";
import MainNav from "@/components/MainNav.vue";
import client from "@/client";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { VButton, MainNav },

  setup() {
    let meal = ref();
    let user = ref();
    const router = useRouter();
    let name = computed(() => {
      const names: string[] = user.value?.name?.split(" ");
      if (!names) return "";
      return names[0];
    });

    const getMeal = async () => {
      // Get meal info
      try {
        const { data } = await client.getNextMeal();
        meal.value = data;
      } catch (error) {
        console.error(error);
      }
    };
    const handlePreparedMeal = () => {
      router.push({ name: "newrecipes" });
      setTimeout(() => window.location.reload(), 100);
    };
    const getUserInfo = async () => {
      // Get user information
      try {
        const { data } = await client.getUserInfo();
        user.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    getMeal();
    getUserInfo();

    return {
      name,
      meal,
      handlePreparedMeal,
    };
  },
});
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
header img {
  height: 40px;
  width: 40px;
  border-radius: 50px;
}
header h5 {
  margin: 0;
}
.bg-orange {
  background: #fe9d5c;
  width: 100vw;
  height: 210px;
}
.main {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px;
  width: 100%;
}
.card {
  border-radius: 8px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.18);
  background: #fafafa;
  width: calc(100vw - 10%);
}
.row {
  display: flex;
  justify-content: space-between;
}
.breakfast {
  color: #44d5a3;
  padding: 4px 10px;
  background: #eafaf5;
  width: 72px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 50px;
}
.food_image {
  height: 100px;
  object-fit: cover;
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.diets {
  display: grid;
  grid-template-columns: repeat(3, 140px);
  gap: 5px;
  overflow-y: auto;
}
.mini-card {
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: white;
  border-radius: 4px;
}

.mini-card img {
  width: calc(100% - 8px);
  margin: auto;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
