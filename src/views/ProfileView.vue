<template>
  <ion-page>
    <v-nav title="Profile"></v-nav>
    <ion-content>
      <div class="bg-orange">
        <section class="card" v-if="user">
          <div class="info">
            <img
              class="profile_picture"
              src="https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo"
              alt="profile picture"
            />
            <div class="rows">
              <h5>{{ user.name }}</h5>
              <span>{{ user.email }}</span>
              <p>{{ user.age + " years, " + user.gender }}</p>
            </div>
          </div>
          <div class="divider" />
          <div class="metadata">
            <meta-displayer imageName="height" :value="user.height" prefix="CM" />
            <meta-displayer imageName="calories" :value="user.health.calories" prefix="Cal" />
            <meta-displayer imageName="weight" :value="user.weight" prefix="KG" />
            <meta-displayer imageName="bmi" :value="user.health.imc" prefix="BMI" />
          </div>
        </section>
      </div>
      <section class="actions">
        <row-profile to="/editprofile">
          <h5>Edit Profile</h5>
        </row-profile>
        <row-profile to="/changepassword">
          <h5>Change Password</h5>
        </row-profile>
        <row-profile @click="logout()">
          <div class="logout">
            <img src="/assets/logout.svg" alt="logout" />
            <h5>Logout</h5>
          </div>
        </row-profile>
      </section>
      <main-nav></main-nav>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VNav from "@/components/Nav.vue";
import MetaDisplayer from "@/components/MetaDisplayer.vue";
import RowProfile from "@/components/RowProfile.vue";
import MainNav from "@/components/MainNav.vue";
import client from "@/client";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { VNav, MetaDisplayer, RowProfile, MainNav },
  name: "ProfileView",
  setup(){
    const user = ref();

    const getUser = async () => {
      const { data } = await client.getUserInfo();
      user.value = data;
      console.log(user.value);
    }

    const logout = () => {
      localStorage.removeItem('MY_TOKEN');
      const router = useRouter();
      setTimeout(()=> window.location.reload(), 200);
      router.push("login");
    }

    getUser();


    return{
      user,
      logout,
    }
  }
});
</script>

<style scoped>
.main {
  background: #fafafa;
}
.bg-orange {
  background: #fe9d5c;
  width: 100vw;
  height: 200px;
}
.card {
  position: absolute;
  margin: 42px 16px;
  width: calc(100vw - 32px);
  height: 213px;
  background: #fafafa;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 16px;
}
.info {
  display: flex;
  gap: 12px;
}
.profile_picture {
  height: 64px;
  width: 64px;
  border-radius: 50px;
}
.rows {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
h5 {
  font-family: Manrope;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}
* {
  font-family: Inter;
}
.info span {
  font-size: 14px;
}
.info p {
  font-family: "Manrope";
  font-size: 14px;
  margin: 0;
  color: #5e6272;
  opacity: 0.5;
}
.divider {
  background: #b8b7be;
  height: 1px;
  width: 100%;
  margin: 16px 0;
}
.metadata {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
}
.actions {
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 100px;
  gap: 10px;
}
.logout img {
  width: 25px;
}
.logout {
  display: flex;
  flex-direction: row;
  color: #e3324c;
  align-items: center;
}
</style>
