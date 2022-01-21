<template>
  <div class="container">
    <div v-for="(chat, index) in getMessageById(id)" :key="index">
      <v-row class="justify-end">
        <div>
          <div
            class="message-text deep-purple lighten-1 text-no-wrap rounded-lg rounded-br-0 montserrat white--text pa-3 ma-4"
          >
            {{ chat.myMessage }}
          </div>
          <div class="montserrat mx-5 text-end">{{ chat.timeOfMyMessage }}</div>
        </div>
      </v-row>
      <v-row class="justify-start">
        <img class="photo" :src="`${getUserById(id).imgUrl}`" />
        <div>
          <div
            class="indigo lighten-1 text-no-wrap rounded-lg rounded-bl-0 montserrat white--text pa-3 ma-4"
          >
            {{ chat.reply }}
          </div>
          <div class="montserrat mx-5 text-end">{{ chat.timeOfMyMessage }}</div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AllMessages',
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(['getMessageById']),
    ...mapGetters(['getUserById']),
  },
  methods: {
    ...mapActions(['setChatList']),
  },
  created() {
    this.setChatList(this.id);
  },
};
</script>

<style scoped>
/* Google fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.montserrat {
  font-family: 'Montserrat', sans-serif;
}

.container {
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
}

.message-text {
  font-size: 1.2rem;
}

.photo {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin: 1rem;
}
</style>
