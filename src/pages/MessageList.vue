<template>
  <div class="bg-gradient">
    <v-col cols="12">
      <div v-for="(message, index) in getMessages" :key="index">
        <router-link :to="`/user/${message.id}/chat`">
          <v-card class="ma-2 mx-md-4 px-1 px-md-3">
            <v-card-text>
              <v-row align="center">
                <v-col cols="4" sm="3">
                  <v-avatar size="70" class="mr-4">
                    <img :src="`${getUserById(message.id).imgUrl}`" />
                  </v-avatar>
                </v-col>
                <v-col cols="8" sm="6">
                  <p class="title montserrat dark-purple">
                    {{ getUserById(message.id).name }}
                  </p>
                  <p class="subtitle-1 montserrat dark-purple">
                    {{ getLastChat(message.id).message }}
                  </p>
                </v-col>
                <v-col cols="8" sm="3">
                  <p class="body-2 montserrat dark-purple text-right">
                    {{ getLastChat(message.id).date }}
                    <br v-if="!$vuetify.breakpoint.mobile" />
                    {{ getLastChat(message.id).timeStamp }}
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </router-link>
      </div>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MessageList',
  computed: {
    ...mapGetters(['getMessages', 'getUserById', 'getLastChat']),
  },
  methods: {},
};
</script>

<style scoped>
.bg-gradient {
  width: 100%;
  min-height: 5000px;
  background-image: linear-gradient(#7a80d6, #fff7eb);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat-y;
  background-position: center;
  display: flex;
}
</style>
