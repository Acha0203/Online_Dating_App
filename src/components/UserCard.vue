<template>
  <div class="container">
    <div v-for="(user, index) in getAllUsers" :key="index">
      <div class="user-card">
        <v-avatar size="180" class="mb-5">
          <img :src="`${user.imgUrl}`" />
        </v-avatar>
        <h2 class="montserrat dark-purple pb-1">
          {{ user.name }}
        </h2>
        <h3 class="montserrat dark-purple pb-1">Age: {{ user.age }}</h3>
        <h3 class="montserrat dark-purple pb-1">
          <v-icon color="indigo darken-2"> mdi-map-marker </v-icon>
          {{ user.country }}
        </h3>

        <div class="btns">
          <router-link :to="`/user/${user.id}`">
            <v-btn color="indigo lighten-1" class="my-3 mx-2 white--text">
              Profile
            </v-btn>
          </router-link>
          <router-link :to="`/user/${user.id}/chat`">
            <v-btn color="indigo lighten-1" class="my-3 mx-2 white--text">
              Message
            </v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserCards',
  computed: {
    ...mapGetters(['getAllUsers']),
  },
  methods: {},
};
</script>

<style scoped>
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

.btns {
  display: flex;
}
</style>
