<template>
  <div>
    <v-app-bar app color="indigo lighten-1" elevation="4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="isUserPage">{{
        getUserById(id).name
      }}</v-toolbar-title>
      <v-toolbar-title v-else-if="isMessageList">
        Message List
      </v-toolbar-title>
      <v-toolbar-title v-else>Online Dating App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="drawer">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--lighten-3"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo lighten-1">mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>User List</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/message-list">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo lighten-1">mdi-chat-processing</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Message List</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
    isMessageList() {
      return this.$route.fullPath === '/message-list';
    },
    isUserPage() {
      return this.id !== undefined;
    },
    ...mapGetters(['getUserById']),
  },
};
</script>

<style scoped>
.drawer {
  overflow: hidden;
}
</style>
