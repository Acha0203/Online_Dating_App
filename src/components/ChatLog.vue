<template>
  <div class="container">
    <div v-for="(chat, index) in getChatLogById(id)" :key="index">
      <v-row :class="{ 'justify-end': chat.isMine }">
        <v-avatar size="70" class="ml-5 mt-5">
          <img :src="`${getUserById(id).imgUrl}`" v-if="!chat.isMine" />
        </v-avatar>
        <div>
          <div
            class="rounded-lg montserrat white--text pa-3 ma-4 drop-shadow"
            :class="{
              'deep-purple lighten-1': chat.isMine,
              'indigo lighten-1': !chat.isMine,
              'rounded-br-0': chat.isMine,
              'rounded-bl-0': !chat.isMine,
            }"
          >
            <p class="message-text">
              {{ chat.message }}
            </p>
          </div>
          <div class="montserrat dark-purple mx-5 text-end">
            {{ chat.date }} {{ chat.timeStamp }}
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatLog',
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(['getChatLogById', 'getUserById']),
  },
  methods: {},
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
}

.message-text {
  font-size: 1.2rem;
  max-width: 50vw;
}

.drop-shadow {
  filter: drop-shadow(0.4rem 0.4rem 0.4rem #2a295c);
}
</style>
