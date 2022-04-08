<template>
  <nav class="sub_menu">
    <div :class="classes.home" @click="goTo('home')">
      <div><img src="/assets/home.svg" alt="home" srcset="" /></div>
      <span>Home</span>
    </div>
    <div :class="classes.newRecipes" @click="goTo('newrecipes')">
      <div><img src="/assets/search.svg" alt="newRecipes" srcset="" /></div>
      <span>New Recipes</span>
    </div>
    <div :class="classes.calendar" @click="goTo('mymeals')">
      <div><img src="/assets/calendar.svg" alt="calendar" srcset="" /></div>
      <span>My meals</span>
    </div>
    <div :class="classes.stats" @click="goTo('profile')">
      <div><img src="/assets/stats.svg" alt="profile" srcset="" /></div>
      <span>Profile</span>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const { currentRoute } = router;
    const route = currentRoute.value.path.toString().replace("/", "");
    const newRecipesPaths = ['newrecipes'];
    const profilePaths = ['profile'];
    const calendarPaths = ['mymeals'];

    const classes = computed(() => {
      return {
        home: `item ${route == 'home' && "selected"}`,
        newRecipes: `item ${newRecipesPaths.includes(route) && "selected"}`,
        stats: `item ${profilePaths.includes(route) && "selected"}`,
        calendar: `item ${calendarPaths.includes(route) && "selected"}`,
      };
    });
    
    const goTo = (route: string) => {
      router.push(route);
      setTimeout(()=> window.location.reload(), 200);
    }
    
    return {
      classes,
      goTo
    };
  },
});
</script>


<style scoped>
.sub_menu {
  background: white;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15px 35px;
}

.item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  /* color/neutral/grey/dark */

  color: #b8b7be;
}

.item div img {
  width: 18px;
  height: 18px;
  fill: red;
}

.selected {
  color: #fe9d5c;
}
</style>