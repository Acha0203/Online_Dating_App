<template>
  <v-app id="app">
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
  created: function () {
    require('dotenv').config();
    this.$store.dispatch('fetchUsers');
  },
};
</script>

<style>
/* Google fonts */
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');
#app {
  font-family: 'Merienda', cursive;
}
</style>
