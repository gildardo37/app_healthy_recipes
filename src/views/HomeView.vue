<template>
  <main>
    <header>
      <h5>Welcome, <strong>Darlene!</strong></h5>
      <img
        class="profile_picture"
        src="https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo"
        alt="profile picture"
      />
    </header>
    <section>
      <div class="card">
        <div class="card-header">
          <img src="" alt="" srcset="" />
        </div>
        <div class="card-content">
          <div class="row">
            <span>Avocado explosive salad</span>
            <span><strong>13 min</strong> prep</span>
          </div>
          <div class="breakfast">Breakfast</div>
          <v-button type="border">Prepare your next meal</v-button>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "@/components/Button.vue";

export default defineComponent({
  components: { VButton },
});
</script>

<style scoped>
main {
  padding: 16px;
  background: #fafafa;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
header img {
  height: 40px;
  width: 40px;
  border-radius: 50px;
}
header h5 {
  margin: 0;
}
</style>
