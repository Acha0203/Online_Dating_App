<template>
  <div class="bg-gradient">
    <img class="photo" :src="`${getUserById(id).imgUrl}`" />

    <div class="text-center mb-5">
      <h2 class="montserrat mb-2">
        {{ getUserById(id).firstName }} {{ getUserById(id).lastName }}
      </h2>
      <div class="d-flex">
        <v-icon color="indigo lighten-1"> mdi-email </v-icon>
        <h3 class="montserrat font-small">
          {{ getUserById(id).email }}
        </h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat">Gender</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat">{{ getUserById(id).gender }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat">Age</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat">{{ getUserById(id).age }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat">Country</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat">{{ getUserById(id).country }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat">State</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat">{{ getUserById(id).state }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat">City</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat">{{ getUserById(id).city }}</h3>
      </div>
    </div>
    <div class="btn-container">
      <router-link to="/">
        <v-btn color="indigo lighten-1" class="ma-4 white--text"
          ><v-icon>mdi-arrow-u-left-bottom-bold</v-icon> Back
        </v-btn>
      </router-link>
      <router-link :to="`/user/${id}/chat`">
        <v-btn color="indigo lighten-1" class="ma-2 white--text">
          Message
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserDetail',
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(['getUserById']),
  },
};
</script>

<style scoped>
/* Google fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.montserrat {
  font-family: 'Montserrat', sans-serif;
  color: #2a295c;
}

.font-small {
  font-size: 1rem;
}

h3 {
  font-size: 1rem;
}

.bg-gradient {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #7a80d6 0%, #fff7eb 100%);
}

.photo {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 1rem;
}

.list {
  display: flex;
  width: 280px;
  justify-content: space-around;
  border-top-style: solid;
  border-bottom-style: none;
  border-left-style: none;
  border-right-style: none;
  border-color: #2a295c;
  border-width: 1px;
  padding: 0.7rem;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
