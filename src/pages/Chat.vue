<template>
  <div>
    <div class="bg-gradient">
      <AllMessages />
    </div>
    <v-footer fixed inset height="70">
      <v-row>
        <v-text-field
          v-model="message"
          label="Message"
          color="indigo lighten-1"
          class="montserrat mt-5 ml-3"
          clearable
          outlined
          rounded
          dense
        ></v-text-field>
        <v-btn
          icon
          class="mt-5"
          color="indigo lighten-1"
          @click="sendMessage()"
          :disabled="!message"
        >
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AllMessages from '../components/AllMessages.vue';

export default {
  name: 'Chat',
  data() {
    return {
      message: '',
    };
  },
  components: {
    AllMessages,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(['getUserById']),
  },
  methods: {
    sendMessage: function () {
      this.$store.dispatch('setMessages', {
        id: this.id,
        message: this.message,
      });
    },
    ...mapActions(['setChatList']),
  },
  created() {
    this.setChatList();
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

.bg-gradient {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  background-image: linear-gradient(to bottom, #7a80d6 0%, #fff7eb 100%);
}
</style>
