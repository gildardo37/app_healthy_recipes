<template>
  <main>
    <v-nav title="New Recipes"></v-nav>
    <div class="card_content">
      <div class="title">
        <h3>Generate a new meal</h3>
        <h3>{{ calories }} calories</h3>
      </div>
      <v-button type="solid" @click="getMeal()"> Search</v-button>
      <div class="meal_content" v-if="meals.meals">
        <div class="content">
          <h2>Results</h2>
          <section class="card" v-for="(m, index) in meals.meals" :key="index">
            <div class="img">
              <img
                src="https://www.recetasderechupete.com/wp-content/uploads/2021/08/Croquetas-de-brocoli-y-queso-768x530.jpg"
                alt=""
              />
            </div>
            <div class="content">
              <h3>{{ m.title }}</h3>
              <div class="content_between">
                <span class="blue_text">{{ mealType(index) }}</span>
                <h3>{{ m.readyInMinutes }} min</h3>
              </div>
            </div>
          </section>
        </div>
        <v-button type="border" @click="addMeal()">Add to my meals</v-button>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import VNav from "@/components/Nav.vue";
import client from "@/client";
import VButton from "@/components/Button.vue";

export default defineComponent({
  name: "NewRecipes",
  components: { VNav, VButton },
  data() {
    return {
      meals: [],
      user: {},
      calories: 0,
    };
  },
  mounted() {
    this.getUserInfo();
    this.getTodaysMeal();
  },
  methods: {
    async getMeal() {
      const calories = this.user.health.calories;
      const data = await client.generateMeal(calories);
      this.meals = data;
    },
    async getUserInfo() {
      const data = await client.getUserInfo();
      console.log(data.data.health.calories);
      this.calories = data.data.health.calories;
      this.user = data.data;
      console.log(this.user);
    },
    async addMeal() {
      console.log(this.meals);
      const add = await client.addMeal(this.meals);
      console.log(add);
    },
    formatDate(value) {
      return new Date(value).toDateString();
    },
    mealType(index) {
      if (index === 0) return "Breakfast";
      if (index === 1) return "Meal";
      if (index === 2) return "Dinner";
    },
    getTodaysMeal() {
      const { data } = await client.getMyMeals();
      this.today = data
        .filter((res) => {
          const date1 = new Date(res.date_created).toDateString();
          const date2 = new Date().toDateString();
          if (date1 === date2) return res;
        })
        .reverse();
    },
  },
});
</script>

<style scoped>
main {
  background: #fafafa;
  width: 100vw;
  height: 100vh;
}
.bg-orange {
  background: #fe9d5c;
  width: 100vw;
  height: 210px;
}
.title {
  display: flex;
  justify-content: space-between;
}
.title h3:nth-child(1) {
  text-align: start;
}
.title h3:nth-child(2) {
  text-align: end;
}
h2 {
  text-align: center;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}
.card_content {
  position: absolute;
  top: 72px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px;
  width: 100%;
  overflow-x: scroll;
  height: 91vh;
}

.card {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 25px;
  width: calc(100vw - 32px);
  background: #fafafa;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
}

.card .img {
  height: 100%;
  width: 80px;
  border-radius: 8px;
}

.card .img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.content_between {
  display: flex;
  justify-content: space-between;
}
.blue_text {
  color: #497bea;
  text-decoration: underline;
  font-size: 14px;
}

.actions {
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 100px;
  gap: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.meal_content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: space-between;
}

.meal_content .content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
