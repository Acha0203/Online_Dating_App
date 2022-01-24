<template>
  <div class="bg-gradient">
    <v-avatar size="180" class="mb-5">
      <img :src="`${getUserById(id).imgUrl}`" />
    </v-avatar>
    <div class="text-center mb-5">
      <h2 class="montserrat dark-purple mb-2">
        {{ getUserById(id).name }}
      </h2>
      <div class="d-flex">
        <v-icon color="indigo lighten-1"> mdi-email </v-icon>
        <h3 class="montserrat dark-purple font-small">
          {{ getUserById(id).email }}
        </h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat dark-purple">Gender</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat dark-purple">{{ getUserById(id).gender }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat dark-purple">Age</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat dark-purple">{{ getUserById(id).age }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat dark-purple">Country</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat dark-purple">{{ getUserById(id).country }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat dark-purple">State</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat dark-purple">{{ getUserById(id).state }}</h3>
      </div>
    </div>
    <div class="list">
      <div class="text-left">
        <h3 class="montserrat dark-purple">City</h3>
      </div>
      <div class="text-right">
        <h3 class="montserrat dark-purple">{{ getUserById(id).city }}</h3>
      </div>
    </div>
    <div class="btn-container">
      <router-link to="/user">
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

.list {
  display: flex;
  width: 80%;
  justify-content: space-between;
  border-top-style: solid;
  border-bottom-style: none;
  border-left-style: none;
  border-right-style: none;
  border-color: #2a295c;
  border-width: 1px;
  padding: 0.7rem;
  padding-right: 2rem;
  padding-left: 2rem;
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
