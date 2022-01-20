<template>
  <div class="container">
    <div v-for="(value, key, index) in allUsers" :key="index">
      <div class="user-card">
        <img class="photo" :src="`${value.imgUrl}`" />
        <h2 class="montserrat">{{ value.firstName }} {{ value.lastName }}</h2>
        <h3 class="montserrat">Age: {{ value.age }}</h3>
        <h3 class="montserrat">
          <v-icon> mdi-map-marker </v-icon> {{ value.country }}
        </h3>

        <div class="btns">
          <router-link :to="`/user/${key}`">
            <v-btn color="indigo lighten-1" class="ma-2 white--text">
              Profile
            </v-btn>
          </router-link>
          <v-btn color="indigo lighten-1" class="ma-2 white--text">
            Message
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserCards',
  computed: {
    ...mapGetters(['allUsers']),
  },

  methods: {
    ...mapActions(['fetchUsers']),
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* Google fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.montserrat {
  font-family: 'Montserrat', sans-serif;
  color: #2a295c;
  padding-bottom: 1rem;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
}

.user-card {
  width: 300px;
  height: 480px;
  background: linear-gradient(#515aac, #ced0ee);
  filter: drop-shadow(0.4rem 0.4rem 0.4rem #2a295c);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
}

.photo {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 1rem;
}

.btns {
  display: flex;
}
</style>
