<template>
  <main>
    <v-nav title="Profile"></v-nav>
    <div class="bg-orange">
      <div class="card_content">
        <template v-for="(myMeals, index) in allMeals" :key="index">
          <section class="card" v-for="m in myMeals" :key="m.id_meal">
            <div class="img">
              <img
                src="https://www.recetasderechupete.com/wp-content/uploads/2021/08/Croquetas-de-brocoli-y-queso-768x530.jpg"
                alt=""
              />
            </div>
            <div class="content">
              <!-- <h3>{{ m.title }}</h3> -->
              <h3>{{ m }}</h3>
              <!-- <small>{{ meals.calories }}</small>
              <div class="content_between">
                <span class="blue_text">{{ m.type }}</span>
                <h3>{{ m.ready_in_minutes }} min</h3>
              </div> -->
            </div>
          </section>
        </template>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VNav from "@/components/Nav.vue";

export default defineComponent({
  name: "ProfileView",
  components: { VNav },
  data() {
    return {
      allMeals: [
        {
          id_meal: 95,
          calories: "3000.00",
          protein: "109.42",
          carbohydrates: "88.93",
          fat: "128.63",
          date_created: "2022-04-03T02:39:22.000Z",
          meals: [
            {
              id_meal: 275,
              title: "Homemade Lemon Bars",
              type: "Breakfast",
              checked: false,
              ready_in_minutes: 45,
              image: "http://www.tasteofhome.com/Recipes/homemade-lemon-bars",
              servings: 9,
            },
            {
              id_meal: 285,
              title: "Shrimp Scampi with Artichokes and Basil",
              type: "Meal",
              checked: false,
              ready_in_minutes: 17,
              image:
                "http://www.foodnetwork.com/recipes/paula-deen/shrimp-scampi-with-artichokes-and-basil-recipe.html",
              servings: 4,
            },
            {
              id_meal: 295,
              title: "Salmon En Croute With Tarragon Cream Sauce",
              type: "Dinner",
              checked: false,
              ready_in_minutes: 45,
              image:
                "https://spoonacular.com/salmon-en-croute-with-tarragon-cream-sauce-659068",
              servings: 2,
            },
          ],
        },
        {
          id_meal: 155,
          calories: "3000.00",
          protein: "109.42",
          carbohydrates: "88.93",
          fat: "128.63",
          date_created: "2022-04-05T11:42:42.000Z",
          meals: [
            {
              id_meal: 455,
              title: "Homemade Lemon Bars",
              type: "Breakfast",
              checked: false,
              ready_in_minutes: 45,
              image: "http://www.tasteofhome.com/Recipes/homemade-lemon-bars",
              servings: 9,
            },
            {
              id_meal: 465,
              title: "Shrimp Scampi with Artichokes and Basil",
              type: "Meal",
              checked: false,
              ready_in_minutes: 17,
              image:
                "http://www.foodnetwork.com/recipes/paula-deen/shrimp-scampi-with-artichokes-and-basil-recipe.html",
              servings: 4,
            },
            {
              id_meal: 475,
              title: "Salmon En Croute With Tarragon Cream Sauce",
              type: "Dinner",
              checked: false,
              ready_in_minutes: 45,
              image:
                "https://spoonacular.com/salmon-en-croute-with-tarragon-cream-sauce-659068",
              servings: 2,
            },
          ],
        },
        {
          id_meal: 165,
          calories: "3000.00",
          protein: "109.42",
          carbohydrates: "88.93",
          fat: "128.63",
          date_created: "2022-04-05T11:42:42.000Z",
          meals: [
            {
              id_meal: 485,
              title: "Homemade Lemon Bars",
              type: "Breakfast",
              checked: false,
              ready_in_minutes: 45,
              image: "http://www.tasteofhome.com/Recipes/homemade-lemon-bars",
              servings: 9,
            },
            {
              id_meal: 495,
              title: "Shrimp Scampi with Artichokes and Basil",
              type: "Meal",
              checked: false,
              ready_in_minutes: 17,
              image:
                "http://www.foodnetwork.com/recipes/paula-deen/shrimp-scampi-with-artichokes-and-basil-recipe.html",
              servings: 4,
            },
            {
              id_meal: 505,
              title: "Salmon En Croute With Tarragon Cream Sauce",
              type: "Dinner",
              checked: false,
              ready_in_minutes: 45,
              image:
                "https://spoonacular.com/salmon-en-croute-with-tarragon-cream-sauce-659068",
              servings: 2,
            },
          ],
        },
      ]
    }
  },
  methods: {
    // getMyMeals() {
    //   this.allMeals = this.allMeals.reverse();
    // },
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
  padding: 16px;
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
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 16px;
}

.card .img {
  height: 100%;
  width: 80px;
}

.card .img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
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
</style>
