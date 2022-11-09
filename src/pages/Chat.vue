<template>
  <div class="bg-gradient">
    <ChatLog />
    <v-footer fixed inset height="70" color="white">
      <v-row>
        <router-link :to="`/user`">
          <v-btn
            icon
            small
            class="mt-6 mx-3"
            color="indigo lighten-1"
            v-if="!$vuetify.breakpoint.xs"
          >
            <v-icon color="indigo lighten-1">mdi-account-group</v-icon>
          </v-btn>
        </router-link>

        <v-text-field
          v-model="message"
          label="Message"
          color="indigo lighten-1"
          class="montserrat mt-5 ml-3"
          @keydown.enter="onKeydownEnter($event.keyCode, getUserById(id))"
          clearable
          outlined
          rounded
          dense
        ></v-text-field>

        <v-btn
          icon
          small
          class="mt-6 mx-3"
          color="indigo lighten-1"
          @click="sendMessage(getUserById(id))"
          :disabled="!message"
        >
          <v-icon color="indigo lighten-1">mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatLog from '../components/ChatLog.vue';

export default {
  name: 'Chat',
  data() {
    return {
      message: '',
    };
  },
  components: {
    ChatLog,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(['getUserById']),
  },
  methods: {
    onKeydownEnter: function (keyCode, user) {
      if (keyCode !== 13) return;
      this.sendMessage(user);
    },
    sendMessage: function (user) {
      if (!user.talked) {
        this.$store.dispatch('setMessageObj', this.id);

        this.$store.dispatch('setTalkedUser', this.id);
      }

      this.$store.dispatch('setMessage', {
        id: this.id,
        message: this.message,
      });

      this.$store.dispatch('fetchReply', {
        id: this.id,
        message: this.message,
      });
    },
  },
};
</script>

<style scoped>
.bg-gradient {
  width: 100vw;
  min-height: 5000px;
  background-image: linear-gradient(to right, #9aa0f6, #fff7eb);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat-y;
  background-position: center;
  display: flex;
  flex-direction: column;
}
</style>
