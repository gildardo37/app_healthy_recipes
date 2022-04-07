<template>
  <main>
    <v-nav title="New Recipes"></v-nav>
    <div class="card_content">
      <h3>Select your calories range</h3>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import VNav from "@/components/Nav.vue";
import client from "@/client";


export default defineComponent({
  name: "NewRecipes",
  components: { VNav },
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
</style>
