<template>
  <ion-page>
    <ion-content>
      <header>
        <h5>
          Welcome, <strong>{{ name }}!</strong>
        </h5>
        <div>&nbsp;</div>
      </header>
      <div class="bg-orange">
        <div class="main">
          <section>
            <div class="card" v-if="meal">
              <div class="card-header">
                <a target="_blank" :href="meal.image">
                  <img
                    class="food_image"
                    src="https://grillsfusionparrilla.com/wp-content/uploads/2020/10/platillos2-1024x1024.png"
                    alt=""
                    srcset=""
                  />
                </a>
              </div>
              <div class="card-content">
                <div class="row">
                  <span>{{ meal.title }}</span>
                  <span
                    ><strong>{{ meal.ready_in_minutes }} min</strong></span
                  >
                </div>
                <div class="breakfast">{{ meal.type }}</div>
                <v-button
                  @click="
                    goTo({ name: 'nextmeal', params: { id: meal.id_meal } })
                  "
                  type="border"
                  >Prepare your next meal</v-button
                >
              </div>
            </div>
            <div class="card" v-else>
              <div class="card-header">
                <img
                  class="food_image"
                  src="https://grillsfusionparrilla.com/wp-content/uploads/2020/10/platillos2-1024x1024.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="card-content">
                <div class="row">
                  <span v-if="!hasMealsToday">Add a meal for today</span>
                  <span v-else>All meals completed</span>
                </div>
                <v-button v-if="!hasMealsToday" @click="goTo({ name: 'newrecipes' })" type="border"
                  >Add a meal here</v-button
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
    let hasMealsToday = ref<boolean>();

    const router = useRouter();
    let name = computed(() => {
      const names: string[] = user.value?.name?.split(" ");
      if (!names) return "";
      return names[0];
    });

    const getMeal = async () => {
      // Get meal info
      try {
        const { data, status } = await client.getNextMeal();
        if (status == 0 && data) {
          meal.value = data.meal;
        } else {
          meal.value = null;
        }
        console.log(meal.value);
      } catch (error) {
        console.error(error);
      }
    };
    const getToday = async () => {
      const { data } = await client.getMyMeals();
      const todays = data
        .filter((res: any) => {
          const date1 = new Date(res.date_created).toDateString();
          const date2 = new Date().toDateString();
          if (date1 === date2) return res;
        })
        .reverse();

      if (todays.length == 0) {
        hasMealsToday.value = false;
      }else{
        hasMealsToday.value = true;
      }
    };

    const goTo = (params: any) => {
      console.log(params);
      router.push(params);
      setTimeout(() => window.location.reload(), 200);
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
    getToday();

    return {
      name,
      meal,
      goTo,
      hasMealsToday,
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

.diets::-webkit-scrollbar {
  display: none;
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
